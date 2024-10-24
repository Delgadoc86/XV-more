import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarsIcon from '@mui/icons-material/Stars';
import './BirthdaySection.css';
import moreImage from '../Assets/more.png';

const BirthdaySection = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-12-23T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizar el estado del contador, asegurando que cada valor tenga dos dígitos
      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      sx={{
        background: 'radial-gradient(circle, #FFFAF0 0%, #d7c2e8 70%)',
        padding: { xs: 2, sm: 4 },
        borderRadius: 2,
        mt: 4,
        position: 'relative',
        overflow: 'hidden', 
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={moreImage} 
              alt="Cumpleañera" 
              style={{ width: '100%', height: 'auto' }}
            />
            <Box className="image-overlay" />
            <Typography 
              variant="h4" 
              sx={{
                position: 'absolute', 
                bottom: 16, 
                left: '50%', 
                transform: 'translateX(-50%)',
                color: '#e91e63',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', 
              }}
            >
              
              More
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 2, textAlign: 'center' }}>
            ¡Estás invitado a una fiesta increíble!
          </Typography>
          <Typography variant="h6" sx={{ color: '#e91e63', mb: 2, textAlign: 'center' }}>
            Requisitos para disfrutar al máximo:
          </Typography>
          <List sx={{ textAlign: 'center' }}>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <Typography>Ganas de divertirse</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <Typography>Disfraces creativos</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccessAlarmIcon />
              </ListItemIcon>
              <Typography>Traer tu mejor baile</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <Typography>Algo de brillo o confeti</Typography>
            </ListItem>
          </List>
          <Typography variant="h5" sx={{ mt: 4, fontWeight: 900, color: '#e91e63', textAlign: 'center' }}>
            Comienza la fiesta en:
          </Typography>
          <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              mt: 2, 
              padding: 2, 
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 2,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
            }}>
            {['Días', 'Hs', 'Min', 'Seg'].map((label, index) => (
              <Box key={index} sx={{ 
                  textAlign: 'center', 
                  color: '#333', 
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, // Ajusta el tamaño del texto
                  backgroundColor: '#fffd', 
                  borderRadius: 2, 
                  padding: 1,
                  flex: '1',
                  margin: { xs: '10px 0', sm: '0 5px' },
                  minWidth: { xs: '80%', sm: '70px' },
                }}>
                <div>{countdown[Object.keys(countdown)[index]]}</div>
                <div>{label}</div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BirthdaySection;
