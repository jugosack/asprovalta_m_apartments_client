import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import openPopup from './popup'; // Import the openPopup function

// Function to generate unique keys
function generateKey(line, index) {
  return `${line}_${index}`;
}

const MediaCard = ({ roomName, description, imageUrl }) => {
  const handleDetailsClick = () => {
    // Call the openPopup function when the "DETAILS" button is clicked
    openPopup(roomName); // Pass the roomName to openPopup
  };

  // Split the description into an array of lines
  const descriptionLines = description.split('\n');

  return (
    <Card sx={{
      display: 'flex', maxWidth: 385, border: 2, maxHeight: 210, overflow: 'hidden', backgroundColor: '#c4f5e6',
    }}
    >
      <CardMedia sx={{ width: 150, flexShrink: 0 }} image={imageUrl} title={roomName} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {roomName}
        </Typography>
        <Box
          sx={{
            maxWidth: 220,
            maxHeight: '100%', // Adjust the maxHeight as needed
            overflowY: 'auto', // Enable vertical scrolling if needed
          }}
        >
          {/* Display each date on a separate line with distinguishable colors */}
          {descriptionLines.map((line, index) => (
            <Typography
              key={generateKey(line, index)}
              variant="body2"
              color="text.primary"
              style={{
                backgroundColor: index % 2 === 0 ? '#c7e3ff' : '#a9d2ff', // Light blue and slightly darker light blue
                padding: '2px', // Adjust the padding as needed
                borderRadius: '2px', // Adjust the border radius as needed
                marginBottom: '3px', // Adjust the margin as needed
                whiteSpace: 'pre-line', // Preserve line breaks
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>

        <CardActions sx={{ marginTop: 'auto', flexDirection: 'row-reverse' }}>
          <Button size="small" sx={{ marginLeft: '-25px' }}>BOOK NOW</Button>
          <Button
            size="small"
            onClick={handleDetailsClick}
          >
            DETAILS
          </Button>
        </CardActions>

      </CardContent>
    </Card>
  );
};

MediaCard.propTypes = {
  roomName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MediaCard;
