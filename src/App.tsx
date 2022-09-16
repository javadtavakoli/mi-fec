import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/router';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
