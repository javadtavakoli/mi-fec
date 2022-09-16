import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PagesLayout from '.';
import Button from '../components/button';
import VideosListPage from './videos-list';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="videos" />} />
      <Route
        path={'videos'}
        element={
          <PagesLayout headerExtra={<Button primary>Add video</Button>}>
            <VideosListPage />
          </PagesLayout>
        }
      />
    </Routes>
  );
};
export default AppRouter;
