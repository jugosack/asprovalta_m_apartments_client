/* eslint-disable no-console */

import axios from 'axios';

const API_KEY = 'AIzaSyDOBRTeRZkI1rzMam4HKC6qaO6Hv_0GIRg';

const getGoogleReviews = async (placeId) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${API_KEY}`,
    );

    if (response.data.status === 'OK') {
      const { reviews } = response.data.result;
      return reviews;
    }
    console.error('Error fetching Google Reviews:', response.data.status);
    return [];
  } catch (error) {
    console.error('Error fetching Google Reviews:', error.message);
    return [];
  }
};

export default getGoogleReviews;
