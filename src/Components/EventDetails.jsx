import React from 'react';
import { Box, Typography, Grid, keyframes } from '@mui/material';
import { AccessTime, LocationOn, DateRange, Star } from '@mui/icons-material';

// Animación de rebote para las estrellas
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Animación de entrada para el contenedor
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const eventItems = [
  {
    icon: DateRange,
    title: "Fecha:",
    description: "28 de Diciembre de 2024",
  },
  {
    icon: LocationOn,
    title: "Lugar:",
    description: "Luján de Cuyo, Mendoza",
  },
  {
    icon: AccessTime,
    title: "Hora:",
    description: "Desde las 21:00 horas",
  },
  {
    icon: Star,
    title: "Actividades:",
    description: "Cena, Show, baile, sorpresas y más.",
  },
];

const EventDetails = () => (
  <Box
    sx={{
      backgroundColor: '#fff',
      p: { xs: 8, md: 12 },
      textAlign: 'center',
      mt: 4,
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      animation: `${fadeIn} 1.5s ease-out`,
    }}
  >
    <Typography
      variant="h3"
      sx={{
        mb: 2,
        color: '#e91e63',
        fontWeight: 700,
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      Detalles del Evento
    </Typography>

    <Typography
      variant="h5"
      sx={{ mb: 3, color: '#555', fontFamily: 'Poppins, sans-serif' }}
    >
      ¡Celebra con nosotros el gran día!
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {eventItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '150px',
              minWidth: { xs: '80%', sm: '200px', md: '150px' },
              maxWidth: '300px',
              transition: '0.4s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                animation: `${bounce} 1s ease-in-out`,
              },
            }}
          >
            <item.icon sx={{ fontSize: 40, color: '#e91e63', mb: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default EventDetails;
