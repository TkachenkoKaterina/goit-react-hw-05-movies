import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { trendApi } from '../../api/Api';

const Home = () => {
  const [dataTrend, setDataTrend] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const { results } = await trendApi();
        setDataTrend(results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchTrends();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList data={dataTrend} />
    </>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
