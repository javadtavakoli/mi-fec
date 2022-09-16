import { ProcessedFormat, VideoFormat } from '../interfaces';

const CompareFormats = (formatA: VideoFormat, formatB: VideoFormat): number => {
  if (formatA.size > formatB.size) return -1;
  else if (formatA.size < formatB.size) return 1;
  const formatARes = parseInt(formatA.res);
  const formatBRes = parseInt(formatB.res);
  if (formatARes > formatBRes) return -1;
  else if (formatARes < formatBRes) return 1;
  return 0;
};
const HighestFormat = (formats: [string, VideoFormat][]): ProcessedFormat => {
  const _formats = [...formats];
  _formats.sort((a, b) => CompareFormats(a[1], b[1]));
  const [highestFormat] = _formats;  
  return {
    formatName: highestFormat[0],
    ...highestFormat[1],
  };
};

const VideoFormatTools = { CompareFormats, HighestFormat };
export default VideoFormatTools;
