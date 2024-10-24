import React from 'react';
import HeroSection from './Components/HeroSection';
import EventDetails from './Components/EventDetails'; // Asegúrate de que esto esté correcto
import EventCarousel from './Components/EventCarousel';
import BirthdaySection from './Components/BirthdaySection';
import EventInfo from './Components/EventInfo';
import Footer from './Components/Footer'; // Asegúrate de la ruta correcta
function App() {
  return (
    <div>
      <HeroSection />
      <EventDetails />
      <EventCarousel />
      <BirthdaySection/>
      <EventInfo/>
      <Footer />
      
      {/* Otras secciones pueden ir aquí */}
    </div>
  );
}

export default App;
