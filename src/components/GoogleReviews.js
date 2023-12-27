/* eslint-disable no-console */

// import axios from 'axios';

// const API_KEY = 'AIzaSyDOBRTeRZkI1rzMam4HKC6qaO6Hv_0GIRg';

// const getGoogleReviews = async (placeId) => {
//   try {
//     const response = await axios.get(
//       `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${API_KEY}`,
//     );

//     if (response.data.status === 'OK') {
//       const { reviews } = response.data.result;
//       return reviews;
//     }
//     console.error('Error fetching Google Reviews:', response.data.status);
//     return [];
//   } catch (error) {
//     console.error('Error fetching Google Reviews:', error.message);
//     return [];
//   }
// };

// export default getGoogleReviews;
/// ////////////////////////////////////////////////////////////////////
/* eslint-disable no-console */
// import axios from 'axios';

// const getGoogleReviews = async (placeId) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/google-maps-api?placeid=${placeId}`, // Use the proxy server
//     );

//     if (response.data.status === 'OK') {
//       const { reviews } = response.data.result;
//       return reviews;
//     }
//     console.error('Error fetching Google Reviews:', response.data.status);
//     return [];
//   } catch (error) {
//     console.error('Error fetching Google Reviews:', error.message);
//     return [];
//   }
// };

// export default getGoogleReviews;
/// ///////////////////////////////////////////////////////////////////////////
/* eslint-disable no-console */
import axios from 'axios';

const getGoogleReviews = async (placeId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/google-maps-api?placeid=${placeId}`,
    );

    if (response.data.status === 'OK') {
      const { reviews } = response.data.result;
      const formattedReviews = reviews.map((review) => ({
        text: review.text,
        rating: review.rating,
        reviewerImage: review.profile_photo_url, // Assuming the API
        reviewerName: review.author_name, // Assuming the API provides the reviewer's name
        time: review.time,
      }));

      return formattedReviews;
    }

    console.error('Error fetching Google Reviews:', response.data.status);
    return [];
  } catch (error) {
    console.error('Error fetching Google Reviews:', error.message);
    return [];
  }
};
export default getGoogleReviews;
