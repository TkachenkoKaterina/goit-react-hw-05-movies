import { detailsApi } from 'api/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = location.state;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieByID = async () => {
      try {
        const movieDetails = await detailsApi(movieId);
        // console.log('movieDetails ', movieDetails);
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
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <div>
          <h2>{title}</h2>
          <p>User crores {Math.round(vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <h5>Additional information</h5>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
