import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../styles/checkavailiability.css';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* Main Image Container with Navigation Icons */}
      <div className="main-image-container" style={{ position: 'relative' }}>
        {/* Previous Icon (Left Circle) */}
        <div
          className="navigation-icon"
          onClick={handlePrevClick}
          role="presentation"
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          &lt;
        </div>

        {/* Main Image */}
        <img
          src={images[currentIndex].url}
          alt=""
          onClick={handleNextClick}
          role="presentation"
          style={{
            width: '110%',
            height: 'auto',
            cursor: 'pointer',
          }}
        />

        {/* Next Icon (Right Circle) */}
        <div
          className="navigation-icon"
          onClick={handleNextClick}
          role="presentation"
          style={{
            position: 'absolute',
            top: '50%',
            right: '-20px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          &gt;
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-container">
        {images.map((thumbnail, index) => (
          <img
            key={uuidv4()}
            src={thumbnail.url}
            alt=""
            onClick={() => handleThumbnailClick(index)}
            role="presentation"
            style={{
              width: '65px',
              height: '65px',
              cursor: 'pointer',
              border: `2px solid ${index === currentIndex ? 'blue' : 'transparent'}`,
              margin: '2px', // Add the margin style here
            }}
          />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
