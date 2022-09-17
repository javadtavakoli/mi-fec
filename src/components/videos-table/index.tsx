import React from 'react';
import { Link } from 'react-router-dom';
import type { ProcessedVideo } from '../../common/interfaces';
import styles from './videos-table.module.css';

type VideosTableProps = {
  videos: ProcessedVideo[];
  deleteVideo: (videoId: number) => void;
};

export const VideosTable = ({ videos, deleteVideo }: VideosTableProps) => (
  <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Video Name</th>
          <th>Author</th>
          <th>Categories</th>
          <th>Highest quality format</th>
          <th>Release Date</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {videos.map((video) => (
          <tr key={video.id}>
            <td>{video.name}</td>
            <td>{video.author}</td>
            <td>{video.categories.join(', ')}</td>
            <td>
              {video.highestQualityFormat.formatName} {video.highestQualityFormat.res}
            </td>
            <td>{video.releaseDate}</td>
            <td>
              <Link to={`/videos/edit/${video.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteVideo(video.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
