// /* eslint-disable no-plusplus */
// /* eslint-disable no-console */

// import '../styles/review.css';
// import React, { useEffect, useState } from 'react';
// import getGoogleReviews from './GoogleReviews';

// const Review = () => {
//   const [reviews, setReviews] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const placeId = 'ChIJPTqLQyIfqRQRyFG3wnFg5c4'; // Replace with the actual Place ID
//       const result = await getGoogleReviews(placeId);
//       setReviews(result);
//     };

//     fetchReviews();

//     // Update currentIndex to display the next review after a delay
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 1;
//         return nextIndex < reviews.length ? nextIndex : 0;
//       });
//     }, 5000); // Delay before showing the next review (adjust as needed)

//     return () => clearInterval(intervalId);
//   }, [reviews.length]); // Add 'reviews.length' to the dependency array

//   // Helper function to generate star rating
//   const renderStarRating = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={`star ${i <= rating ? `star-filled-${i}` : 'star-empty'}`}
//         >
//           ★
//         </span>,
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="review-container">
//       <h1 className="title-rev">Reviews:</h1>
//       {reviews.length > 0 && (
//         <div className="text-container">
//           <div className="img-name">
//             <img
//               className="img"
//               src={reviews[currentIndex]?.reviewerImage || ''}
//               alt="Reviewer"
//             />
//             <div className="name-time">
//               <p>{reviews[currentIndex]?.reviewerName || ''}</p>
//               <p>
//                 {reviews[currentIndex]
//                   ? new Date(
//                     reviews[currentIndex].time * 1000,
//                   ).toLocaleDateString('en-US', {
//                     day: 'numeric',
//                     month: 'long',
//                     year: 'numeric',
//                   })
//                   : ''}
//               </p>
//             </div>
//           </div>
//           <p>{renderStarRating(reviews[currentIndex]?.rating || 0)}</p>
//           <p>{reviews[currentIndex]?.text || ''}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Review;

/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import '../styles/review.css';
import React, { useEffect, useState } from 'react';
import getGoogleReviews from './GoogleReviews';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const placeId = 'ChIJPTqLQyIfqRQRyFG3wnFg5c4'; // Replace with the actual Place ID
      const result = await getGoogleReviews(placeId);
      setReviews(result);
    };

    fetchReviews();

    // Update currentIndex to display the next review after a delay
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex < reviews.length ? nextIndex : 0;
      });
    }, 5000); // Delay before showing the next review (adjust as needed)

    return () => clearInterval(intervalId);
  }, [reviews.length]); // Add 'reviews.length' to the dependency array

  return (
    <div className="review-container">
      <div className="rev-but">
        <h1 className="title-rev">Reviews:</h1>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJPTqLQyIfqRQRyFG3wnFg5c4"
          target="_blank"
          rel="noopener noreferrer"
          className="write-review-btn"
        >
          Leave a Review
        </a>
      </div>
      {reviews.length > 0 && (
        <div className="text-container">
          <div className="img-name">
            <img
              className="img"
              src={reviews[currentIndex]?.reviewerImage || ''}
              alt="Reviewer"
            />
            <div className="name-time">
              <p>{reviews[currentIndex]?.reviewerName || ''}</p>
              <p>
                {reviews[currentIndex]
                  ? new Date(
                    reviews[currentIndex].time * 1000,
                  ).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                  : ''}
              </p>
            </div>
          </div>
          <p className="heart-container">
            {Array.from(
              { length: reviews[currentIndex]?.rating || 0 },
              (_, index) => (
                <span key={index} className="heart-filled">
                  ❤
                </span>
              ),
            )}
            {Array.from(
              { length: 5 - (reviews[currentIndex]?.rating || 0) },
              (_, index) => (
                <span key={index} className="heart-empty">
                  ❤
                </span>
              ),
            )}
          </p>
          <p>{reviews[currentIndex]?.text || ''}</p>
        </div>
      )}
    </div>
  );
};

export default Review;
