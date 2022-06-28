import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import myTheme from '../../themes/myTheme';

const StoreHeader = ({ image, title }) => {
    const { palette } = useTheme(myTheme);
  
    return (
        <Box sx={{
            position: 'relative',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image})`,
            width: '100%',
            height: { xs: '35vh', sm:'45vh' },
            borderRadius: '0 0 50px 50px',
            overflow: 'hidden'
        }}>
            {/* <Box sx={{
                position:'absolute',
                width: '100%',
                height: '100%',
                background: `linear-gradient(200deg, ${palette.primary.light}, transparent)`,
            }}></Box> */}
            <Typography variant='h4' sx={{ color: '#fff', position: 'absolute', left: '30px', bottom: '30px' }}>
                { title }
            </Typography>
        </Box>
  )
}

export default StoreHeader