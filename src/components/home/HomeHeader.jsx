import React, { useEffect } from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { motion, useAnimation } from "framer-motion";
import { logo } from '../../assets';

const buttonVariant = {
  visible: { scale: [.2, 1.2, 1], opacity: 1, rotate: 0, transition: { duration: 2, delay: 1 }},
  hidden: { opacity: 0,  rotate: 360}
}
const titleVariant = {
  visible: { opacity: 1, transition: { duration: 2 }},
  hidden: { opacity: 0,  rotate: 360}
}

const HomeHeader = () => {
  const control = useAnimation();

  useEffect(()=>{
    control.start('visible')    
  }, [])

  return (
    <Container disableGutters sx={{ position: 'relative', minHeight: '100vh' }}  maxWidth='x1'>

      <Box sx={{ paddingLeft:{xs: 0, sm: 10},  position: 'relative', width: { xs: '100%', sm:'60%', md: '50%'}, paddingTop: '5rem' }}>
        <motion.div variants={titleVariant} initial='hidden' animate={control}>
          <Typography variant='h2' fontStyle='italic' sx={{ py:{xs: 2, sm: 0}, textAlign: { xs:'center', sm:'left' }, background:{ xs: 'radial-gradient(rgba(0,0,0, .4), rgba(0,0,0, .8))', sm:'transparent' }, marginBottom: '2rem', color: '#fff', fontSize:{xs: '2.2rem', sm: '3rem'} , position: 'relative' }}>"Al Norte de la Moda"</Typography>
          <Typography variant='body' fontStyle='italic' sx={{ display: {xs:'none', sm: 'block'}, fontSize: '1rem', color: '#fff', position: 'relative' }}>alguna frase motivadora super mega guai que ayude a vender yeahhhh</Typography>         
        </motion.div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', top: '50px' }}>
          <motion.div variants={buttonVariant} initial='hidden' animate={control}>
            <Button  href='#homeStore' variant='logoButton'>
              <img style={{ zIndex: '20' }} src={logo} alt="" width='100px'  />
            </Button>
          </motion.div>
        </div>

        <div >
        </div>          
          
      </Box>      
    </Container>
  )
}

export default HomeHeader