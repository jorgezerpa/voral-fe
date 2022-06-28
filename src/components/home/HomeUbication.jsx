import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from '../../components';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

const HomeUbication = () => {
  return (
    <Container disableGutters>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sm={5}>
          <Typography mt={5} textAlign='center' variant='h4' sx={{ color: '#fff' }}>Ubicanos</Typography>
          <Box  sx={{ margin: '1rem auto', width: '250px', height: '250px' }}>
              <Map />
          </Box>
          <Typography variant='body1' textAlign='center' sx={{ color: '#fff' }}>Av. Bolivar, local N</Typography>
          <Typography variant='body1' textAlign='center' sx={{ color: '#fff' }}>Lagunillas, Mérida</Typography>
        </Grid>

        <Grid item xs={12} sm={5} mt={8} sx={{ background: {xs:'rgba(255,255,255, 1)', sm: 'transparent'}, paddingY: {xs: 3, sm: 0}, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={{ px: 1, color: { xs: '#000', sm:'#fff' } }} gutterBottom variant='h3' textAlign='center'>¡Tenemos Delívery!</Typography>
          <Typography sx={{ px: 1, color: { xs: '#000', sm:'#fff' } }} mb={3} variant='body1' gutterBottom textAlign='center'>Ordena lo que desees, ¡nosotros nos encargamos del resto!</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button component={Link} to='store' variant='primary'>Ver Tienda</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeUbication