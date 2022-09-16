export interface Category {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  catIds: number[];
  name: string;
  formats: { [formatName: string]: VideoFormat };
  releaseDate: string;
}
export interface VideoFormat {
  res: string;
  size: number;
}
export interface Author {
  id: number;
  name: string;
  videos: Video[];
}
export type ProcessedFormat = { formatName: string } & VideoFormat;
export interface ProcessedVideo {
  id: number;
  name: string;
  author: string;
  categories: string[];
  highestQualityFormat: ProcessedFormat;
  releaseDate: string;
}
