import { detailsApi } from 'api/Api';
import { BackLink } from 'components/BackLink/BackLink';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  let backLinkHref = '/';
  if (location.state?.from.pathname === '/movies') {
    backLinkHref = '/movies';
  } else {
    backLinkHref = location.state?.from ?? '/';
  }

  useEffect(() => {
    const fetchMovieByID = async () => {
      try {
        const movieDetails = await detailsApi(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchMovieByID();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, vote_average, overview, genres, poster_path } = movie;

  return (
    <div className={css.container}>
      <BackLink to={backLinkHref}>Back to Movies</BackLink>
      <div className={css.box}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={css.img}
        />
        <div>
          <h2 className={css.h}>{title}</h2>
          <p className={css.p}>User crores {Math.round(vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.add}>
        <h5>Additional information</h5>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
