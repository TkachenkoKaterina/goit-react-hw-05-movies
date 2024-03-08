import SearchMovie from 'components/SearchMovie/SearchMovie';
import { searchApi } from 'api/Api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchTextValue, setSearchTextValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const { results } = await searchApi(searchTextValue);
        if (!searchTextValue) {
          return;
        }
        console.log('results :>> ', results);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchSearchMovies();
  }, [searchTextValue]);

  const handleSubmit = searchText => {
    setSearchTextValue(searchText);
    // setMovies([]);
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
