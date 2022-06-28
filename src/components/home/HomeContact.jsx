import React from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';

const HomeContact = () => {
  return (
    <Container disableGutters sx={{position: 'relative', minHeight: '100vh'}} >
        <Grid container sx={{position: 'absolute', background:{xs: 'transparent', sm:'rgba(255,255,255, .7)'}, bottom: { xs: 'auto', sm: '0' } }}>
            <Grid sx={{ textAlign: {xs:'center', sm:'left'}, padding: { xs: '3rem 1rem', sm: '1rem 2rem 6rem 2rem', md: '1rem 3rem 7rem 3rem' }, }} xs={12} sm={7} item>
                <Typography sx={{color: {xs:'#fff', sm:'#000'} }} variant='h4' gutterBottom>¿Cómo quieres contactárnos?</Typography>
                <Typography sx={{color: {xs:'#fff', sm:'#000'} }} variant='body1'>algun texto o frase que haga que la gente compre yeahhhh</Typography>
            </Grid>
            <Grid sx={{ padding: { xs: 0, sm: 6 }, display: 'flex', alignItems: 'center', flexDirection: { xs:'column', md:'row' }, gap: '10px' }} item xs={12} sm={5} >
                <Button variant='primary'>Whatsapp</Button>
                <Button variant='secondary'>Instagram</Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default HomeContact