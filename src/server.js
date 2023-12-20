/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/google-maps-api', async (req, res) => {
  try {
    const apiKey = 'AIzaSyDOBRTeRZkI1rzMam4HKC6qaO6Hv_0GIRg'; // Replace with your API key
    const placeId = req.query.placeid;

    // Construct the Google Maps API URL
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

    // Make a request to the Google Maps API
    const response = await axios.get(apiUrl);

    // Send the response from the Google Maps API back to the frontend
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error proxying request to Google Maps API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
