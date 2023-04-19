import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
export const Reviews = () => {
  console.log(`reviews`);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setReviews(results);
      });
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <span>Review: {review.content}</span>
            </li>
          ))}
        {reviews?.length === 0 && <h2>There are no reviews for this movie</h2>}
      </ul>
    </div>
  );
};
