import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchApi } from 'api/Api';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchText = searchParams.get('search');
        if (!searchText) {
          return;
        }

        const { results } = await searchApi(searchText);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchSearchMovies();
  }, [searchParams]);

  const handleSubmit = searchText => {
    setSearchParams({ search: searchText });
  };

  return (
    <>
      <h1>Search movie</h1>
      <SearchMovie handleSubmit={handleSubmit} />
      <MovieList data={movies} />
    </>
  );
};

export default Movies;
