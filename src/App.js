import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';

const App = () => {
    return (
    <div>
      <Navbar />
      <HeroSection/>
      <AppSection/>
      <CardSection/>
      <Footer />
    </div>
    
    )
  }

  export default App;