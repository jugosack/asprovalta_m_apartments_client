/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import getGoogleReviews from './GoogleReviews';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const placeId = 'ChIJPTqLQyIfqRQRyFG3wnFg5c4'; // Replace with the actual Place ID
      const result = await getGoogleReviews(placeId);
      setReviews(result);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Google Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>
              Rating:
              {review.rating}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
