import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { castApi } from 'api/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await castApi(movieId);
        setCast(cast);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <div>
      <ul className={css.ul}>
        {cast.map(actor => {
          return (
            <li key={actor.id} className={css.li}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.original_name}
              />
              <h5 className={css.h6}>{actor.character}</h5>
              <p className={css.p}>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
