import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ data }) => {
  return (
    <ul className={css.movieListContainer}>
      {data.map(({ title, name, id }) => {
        return (
          <Link to="movies/:movieId" key={id} className={css.movieLink}>
            {title || name}
          </Link>
        );
      })}
    </ul>
  );
};

export default MovieList;
