import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Typography, Box, Button } from '@mui/material';

const HomeStore = () => {
  return (
    <Container disableGutters sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }} >
      <Box sx={{  width:{xs:'100%', sm:'40%', md: '35%'}, px:{xs:'2rem', md:'3rem'}, background: { xm: 'none', sm:'rgba(255,255,255,1)' }, minHeight: '100vh' }}>
        <Box sx={{ display: { xs:'none', md:'block' }, position: 'absolute', top: '0', left: '65%', height: '100%', width: '100px', background: 'rgba(255,255,255,1)', transform: 'skewX(6deg)', transformOrigin: 'bottom' }} ></Box>
        <Typography variant='h5' mt='25%' textAlign='center' sx={{ color: { xs:'#fff', sm: '#000' } }}>La mejor calidad, <br/> el mejor precio</Typography>
        <Typography variant='body1' my={4} textAlign='center' sx={{ color: { xs:'#fff', sm: '#000' } }} >algun texto o frase que haga que la gente compre esoo brad!! oouu yeahh</Typography>
        <Box sx={{ display: 'flex', alignItems:'center', flexDirection: 'column', gap: '10px' }}>
          <Button component={Link} to='store' variant='primary'>ver tienda</Button>
          <Button href='#homeContact' variant='secondary'>contacto</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default HomeStore