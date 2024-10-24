import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Event, Place, AccessTime, Star } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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

const slideIn = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const EventInfo = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Cambia el número por el correcto
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const titleColor = '#e91e63'; // Color principal compartido
  const boxStyles = {
    p: 2,
    backgroundColor: '#FFFAF',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    animation: `${slideIn} 0.8s forwards`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    mb: 2,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '8px',
      border: '1px solid rgba(0,0,0,0.1)',
      zIndex: -1,
    },
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // Efecto de escalado al pasar el cursor
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        p: 3,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: 2,
        mt: 2,
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${fadeIn} 1s forwards` : 'none',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, color: titleColor, mb: 2, textAlign: 'center' }}>
        ¡Celebra Mis XV!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
        Te invito a celebrar mis quince años, una ocasión muy especial en la que compartiré momentos inolvidables con familia y amigos.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={boxStyles}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: titleColor, textAlign: 'center' }}>
              Detalles del Evento
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
              <Event sx={{ mr: 1, color: titleColor }} /> Fecha: 23 de diciembre de 2024.
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
              <Place sx={{ mr: 1, color: titleColor }} /> Ubicación: Luján de Cuyo, Mendoza.
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
              <AccessTime sx={{ mr: 1, color: titleColor }} /> Hora: 18:00 hs.
            </Typography>
          </Box>

          <Box sx={boxStyles}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: titleColor, mt: 2, textAlign: 'center' }}>
              Programa del Evento
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>Recepción: 18:30 hs.</Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>Cena: 20:00 hs.</Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>Baile: 21:30 hs.</Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
              <Star sx={{ mr: 1, color: titleColor }} /> Dress Code: Formal
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppClick}
              sx={{
                backgroundColor: '#25D366',
                '&:hover': {
                  backgroundColor: '#1DAE33',
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease',
                },
                color: '#fff',
                fontSize: '1.2rem',
                padding: '16px 32px',
                borderRadius: '8px',
                boxShadow: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                textTransform: 'none',
              }}
            >
              Confirmar Asistencia
            </Button>
          </Box>

          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12874.18843754855!2d-68.96942657178454!3d-33.032622898526014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1729724200689!5m2!1ses!2sar"
            sx={{
              width: '100%',
              height: '300px',
              border: 'none',
              borderRadius: '8px',
              boxShadow: 2,
            }}
            title="Ubicación del Evento"
            allowFullScreen
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventInfo;
