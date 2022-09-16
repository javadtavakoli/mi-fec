import { ProcessedVideo } from '../../common/interfaces';

export interface VideosState {
  videos: ProcessedVideo[];
  search: string;
}
