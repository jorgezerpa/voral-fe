import React, { useContext } from 'react';
import { cartIcon } from '../../assets';
import { StoreCard } from '../../components';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';

const StoreGrid = ({ toggleCart, handleOpenProductDetails, products }) => {
  return (
    <Box mt={3} px={3} sx={{ width: '96%', minHeight: 829, margin: '0 auto', paddingTop: '40px' }}>
      <Box onClick={toggleCart()} sx={{ display: { xs:'none', sm:'block' }, position: 'fixed', zIndex:'1000', right: '20px', top: '20px' }}>
        <img width='40px' src={cartIcon} alt="" />
      </Box>
      <Masonry columns={{ lg: 4, sm: 3, xs: 2}} spacing={2}>
        {products.map((item, index) => (
            <StoreCard key={item.id} item={item} handleProductDetails={handleOpenProductDetails} />
        ))}
      </Masonry>
    </Box>
  );
}


export default StoreGrid;