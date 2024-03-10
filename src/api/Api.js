import axios from 'axios';

const KEY = '38934e86a14f960618f8ef1a627c3e51';
const TREND_URL = 'https://api.themoviedb.org/3/trending/all/day';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie';
const CAST_URL = 'https://api.themoviedb.org/3/movie';
const REVIEWS_URL = 'https://api.themoviedb.org/3/movie';

export const trendApi = async query => {
  const { data } = await axios.get(`${TREND_URL}?api_key=${KEY}`);
  return data;
};

export const searchApi = async searchValue => {
  const { data } = await axios.get(
    `${SEARCH_URL}?api_key=${KEY}&query=${searchValue}`
  );
  return data;
};

export const detailsApi = async id => {
  const { data } = await axios.get(`${DETAILS_URL}/${id}?api_key=${KEY}`);
  return data;
};

export const castApi = async id => {
  const { data } = await axios.get(`${CAST_URL}/${id}/credits?api_key=${KEY}`);
  return data;
};

export const reviewsApi = async id => {
  const { data } = await axios.get(
    `${REVIEWS_URL}/${id}/reviews?api_key=${KEY}`
  );
  return data;
};
