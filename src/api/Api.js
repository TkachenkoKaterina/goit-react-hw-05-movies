import axios from 'axios';

const KEY = '38934e86a14f960618f8ef1a627c3e51';
const TREND_URL = 'https://api.themoviedb.org/3/trending/all/day';

export const trendApi = async () => {
  const { data } = await axios.get(`${TREND_URL}?api_key=${KEY}`);
  console.log('trendApi', data);
  return data;
};
