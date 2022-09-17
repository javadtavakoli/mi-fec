import { Author } from '../interfaces';

const Generate = (authors: Author[]): number => {
  const videos = authors.flatMap((author) => author.videos);
  videos.sort((a, b) => a.id - b.id);
  const biggestId = videos[videos.length - 1].id;
  return biggestId + 1;
};
const VideoIdTools = { Generate };
export default VideoIdTools;
