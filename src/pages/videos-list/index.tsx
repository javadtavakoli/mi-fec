import React, { useEffect, useState } from 'react';
import { ProcessedVideo } from '../../common/interfaces';
import { VideosTable } from '../../components/videos-table';
import { getVideos } from '../../services/videos';

const VideosListPage = () => {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);
  return <VideosTable videos={videos} />;
};
export default VideosListPage;
