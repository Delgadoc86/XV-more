import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './EventCarousel.css';

// Imágenes y descripciones
const images = [
  { src: require('../Assets/imagen1.jpg'), description: '¡Preparándonos para la fiesta con estilo!' },
  { src: require('../Assets/imagen2.jpg'), description: '¡No olvides tu mejor disfraz!' },
  { src: require('../Assets/imagen3.jpg'), description: '¡La música será épica esta noche!' },
  { src: require('../Assets/imagen4.jpg'), description: '¡El baile nos espera!' },
  { src: require('../Assets/imagen5.jpg'), description: '¡Que empiece la diversión!' },
  { src: require('../Assets/imagen6.jpg'), description: '¡Vamos a celebrar juntos!' },
];

const EventCarousel = () => {
  return (
    <Box sx={{ mt: 4, textAlign: 'center', position: 'relative' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#e91e63', fontWeight: 700 }}>
        ¡Así será nuestra noche!
      </Typography>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        breakpoints={{
          300: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box className="carousel-container">
              <img
                src={image.src}
                alt={`Evento ${index}`}
                className="carousel-image"
              />
              <Typography className="carousel-description">
                {image.description}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EventCarousel;
