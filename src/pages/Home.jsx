import React from 'react';
import { ParallaxContainer, HomeContact, HomeStore, HomeHeader, HomeUbication } from '../components';
import { Container } from '@mui/material';

import { homeHeader, homeContact, homeUbication, homeStore } from '../assets';

const Home = () => {
  return (
    <Container disableGutters >
      <div id='homeHeader'>
        <ParallaxContainer backgroundImage={homeHeader}>
            <HomeHeader />
        </ParallaxContainer>
      </div>
      <div id='homeStore'>
        <ParallaxContainer backgroundImage={homeStore}>
            <HomeStore />
        </ParallaxContainer>
      </div>
      <div id='homeContact'>
        <ParallaxContainer backgroundImage={ homeContact }>
            <HomeContact />
        </ParallaxContainer>
      </div>
      <div id='homeUbication'>
        <ParallaxContainer backgroundImage={homeUbication}>
            <HomeUbication />
        </ParallaxContainer>
      </div>
    </Container>
  )
}

export default Home