import { castApi } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  const [actors, setActors] = useState(null);
  console.log(actors);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const actorsCast = await castApi(movieId);
        console.log('movieId  ', movieId);
        setActors(actorsCast);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return <h1>Cast component</h1>;
};

export default Cast;
