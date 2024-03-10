import PropTypes from 'prop-types';
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
            state={{ from: location }}
            className={css.movieLink}
          >
            {title || name}
          </Link>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
