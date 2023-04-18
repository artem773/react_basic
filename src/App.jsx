import React from 'react';
import WhoAmI from './components/whoAmI/WhoAmI'
import DynamicGreatings from './components/dynamicGreatings/DynamicGreatings';
import BootstrapGrid from './components/bootstrapGrid/BootstrapGrid';
import BootstrapCarousel from './components/bootstrapCarousel/BootstrapCarousel';

import './App.css';


function App() {

  return (
    < div className='App' >

      <WhoAmI name='John' surname='Wall' link='link.com' />
      <WhoAmI name="Bob" surname="Swan" link="link.com" />

      <BootstrapGrid
        left={
          <DynamicGreatings>
            <h1>Gooood great day</h1>
            <h1>Shalom dear</h1>
          </DynamicGreatings>
        }
        right={
          <BootstrapCarousel />
        }
      />

    </ div>
  )
}

export default App
