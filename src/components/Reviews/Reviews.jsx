import { reviewsApi } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await reviewsApi(movieId);
        setReviews(results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  console.log('reviews :>> ', reviews);
  return (
    <div>
      {reviews.length ? (
        <ul className={css.ul}>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.li}>
                <h6 className={css.h6}>{review.author}</h6>
                <p className={css.p}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        "We don't have any reviews for this movie."
      )}
    </div>
  );
};

export default Reviews;
