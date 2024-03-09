import { detailsApi } from 'api/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = location.state;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieByID = async () => {
      try {
        const movieDetails = await detailsApi(movieId);
        console.log('movieDetails ', movieDetails);
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

  console.log('movie', movie);
  const { title, vote_average, overview, genres, poster_path } = movie;

  return (
    <div>
      <div>
        <img src={poster_path} alt="" />
        <div>
          <h2>{title}</h2>
          <p>User crores {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <h5>Additional information</h5>
          <p>Cast</p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
