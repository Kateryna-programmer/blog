import React from 'react';
import { Box, Typography } from '@mui/material';
import slider1 from 'assets/images/slider-1.jpeg';
import slider2 from 'assets/images/slider-2.webp';
import slider3 from 'assets/images/slider-3.webp';
import slider4 from 'assets/images/slider-4.webp';
import slider5 from 'assets/images/slider-5.webp';
import slider6 from 'assets/images/slider-6.jpeg';
import slider7 from 'assets/images/slider-7.jpeg';
import slider8 from 'assets/images/slider-8.jpeg';
import '../../js/main.js';
import './Slider.scss';

type Props = {};

const Slider = (props: Props) => {
  return (
    <Box
      sx={{
        marginBottom: '80px',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: ['30px', '40px', '50px'],
          textAlign: 'center',
          margin: '50px 0 20px 0',
          fontWeight: 'bold',
        }}
      >
        Get inspired with us
      </Typography>
      <div className="carousel">
        <div className="carousel-item">
          <img src={slider1} alt="style-1" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider2} alt="style-2" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider3} alt="style-3" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider4} alt="style-4" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider5} alt="style-5" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider6} alt="style-6" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider7} alt="style-7" className="carousel-img" />
        </div>
        <div className="carousel-item">
          <img src={slider8} alt="style-8" className="carousel-img" />
        </div>
      </div>
    </Box>
  );
};

export default Slider;
