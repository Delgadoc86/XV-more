import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animación para la entrada del footer
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animación para las estrellas fugaces que caen
const fallingStar = keyframes`
  0% {
    transform: translateY(-10%); // Comienza ligeramente fuera de la parte superior
    opacity: 1;
  }
  100% {
    transform: translateY(100vh); // Termina fuera de la parte inferior de la ventana
    opacity: 0;
  }
`;

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #7b1fa2 30%, #ab47bc 90%)', // Fondo violeta
        color: '#fff',
        padding: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${fadeIn} 0.8s forwards`,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Estrellas fugaces */}
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {[...Array(20)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 4 + 1}px`, // Ancho aleatorio entre 1px y 5px
              height: `${Math.random() * 40 + 10}px`, // Altura aleatoria entre 10px y 50px
              background: 'rgba(255, 255, 255, 0.9)', // Color blanco brillante
              opacity: 0.7,
              filter: 'blur(2px)',
              top: `${Math.random() * -20}%`, // Posición vertical aleatoria que comienza fuera de la parte superior
              left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
              animation: `${fallingStar} ${Math.random() * 3 + 2}s linear infinite`, // Duración aleatoria de la animación
              animationDelay: `${Math.random() * 2}s`, // Retraso aleatorio de la animación
            }}
          />
        ))}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Diseño por: Cristian Delgado
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
        <IconButton
          href="https://www.instagram.com/c_delgado_g"
          target="_blank"
          sx={{
            color: '#e91e63', // Color de Instagram
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          <Instagram fontSize="large" />
        </IconButton>

        <IconButton
          href="mailto:delgadoc86@hotmail.com"
          target="_blank"
          sx={{
            color: '#2196F3', // Color azul para el correo
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          <Email fontSize="large" />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        © {new Date().getFullYear()} Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
