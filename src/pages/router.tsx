import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import PagesLayout from '.';
import Button from '../components/button';
import AddVideoPage from './add-video';
import EditVideoPage from './edit-video';
import VideosListPage from './videos-list';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="videos" />} />
      <Route
        path={'videos'}
        element={
          <PagesLayout
            headerExtra={
              <Link to="/videos/add">
                <Button buttonType={"primary"}>Add video</Button>
              </Link>
            }>
            <VideosListPage />
          </PagesLayout>
        }
      />
      <Route
        path={'videos/add'}
        element={
          <PagesLayout>
            <AddVideoPage />
          </PagesLayout>
        }
      />
      <Route
        path={'videos/edit/:videoId'}
        element={
          <PagesLayout>
            <EditVideoPage />
          </PagesLayout>
        }
      />
    </Routes>
  );
};
export default AppRouter;
