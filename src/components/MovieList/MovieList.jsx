import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <ul className={css.movieListContainer}>
      {data.map(({ title, name, id }) => {
        return (
          <Link
            to={`/movies/${id}`}
            key={id}
            state={{ from: location, movieId: id }}
            className={css.movieLink}
          >
            {title || name}
          </Link>
        );
      })}
    </ul>
  );
};

export default MovieList;
