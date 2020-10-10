import React from 'react';

// Component Imports
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import RiceAppsHeading from './components/RiceAppsHeading';
import DescriptionBoxes from './components/DescriptionBoxes';

// CSS Imports
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <RiceAppsHeading />
      <DescriptionBoxes />
    </div>
  );
}

export default App;
