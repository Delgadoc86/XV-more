import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

// Keyframes para las animaciones
const fadeInSlide = (direction) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${direction === 'down' ? '-20px' : '20px'});
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fallingStar = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const HeroSection = () => {
  const handleMoreInfoClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Desplazarse hacia abajo el 100% del viewport
      behavior: 'smooth',
    });
  };

  // Genera una estrella aleatoria
  const createStar = (index) => ({
    position: 'absolute',
    top: `${Math.random() * -100}%`,
    left: `${Math.random() * 100}%`,
    width: '10px',
    height: '10px',
    backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`,
    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    animation: `${fallingStar} ${Math.random() * 2 + 12}s infinite linear`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: `${Math.random() * 0.5 + 0.5}`,
    transform: `scale(${Math.random() * 0.5 + 0.75})`,
    boxShadow: Math.random() < 0.2 ? '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 1)' : 'none',
  });

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle, #e6a3a8 0%, #d7c2e8 20%)',
        textAlign: 'center',
        p: 2,
      }}
    >
      {/* Lluvia de estrellas */}
      {Array.from({ length: 50 }).map((_, index) => (
        <Box key={index} sx={createStar(index)} />
      ))}

      {/* Haz de luz */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1), transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Contenido principal */}
      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            fontFamily: 'cursive',
            color: '#fff',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 3)',
            animation: `${fadeInSlide('down')} 1s ease-out forwards`,
            opacity: 0,
          }}
        >
          ¡Mis XV, More 2024!
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: '#e91e63',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            animation: `${fadeInSlide('down')} 1.5s ease-out forwards`,
            opacity: 0,
          }}
        >
          23 de Diciembre, Luján de Cuyo.
        </Typography>

        <Button
          variant="contained"
          onClick={handleMoreInfoClick}
          sx={{
            backgroundColor: 'rgba(255, 105, 180, 0.3)',
            backgroundImage: 'linear-gradient(90deg, #ff7a85, #f9c7c9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 105, 180, 1)',
            },
            color: '#fff',
            fontSize: '1.2rem',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(255, 105, 180, 0.9)',
            animation: `${fadeInSlide('up')} 2s ease-out forwards`,
            opacity: 0,
          }}
          size="large"
        >
          Más Información
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
