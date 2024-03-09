import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
