import { Author, Video } from '../interfaces';

const ByVideoId = (authors: Author[], videoId: number): [Video, Author] => {
  const author = authors.find((a) => a.videos.some((v) => v.id === videoId));
  if (!author) throw 'Nothing found';
  const video = author.videos.find((v) => v.id === videoId);
  if (!video) throw 'Video does not found';
  return [video, author];
};
const FindVideoAuthor = { ByVideoId };
export default FindVideoAuthor;
