import React, { useContext } from 'react';
import { StoreCard } from '../../components';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';

const StoreGrid = ({ handleOpenModal, products }) => {
  return (
    <Box mt={3} px={3} sx={{ width: '96%', minHeight: 829, margin: '0 auto', paddingTop: '40px' }}>
      <Masonry columns={{ lg: 4, sm: 3, xs: 2}} spacing={2}>
        {products.map((item, index) => (
            <StoreCard key={item.id} item={item} handleOpenModal={handleOpenModal} />
        ))}
      </Masonry>
    </Box>
  );
}


export default StoreGrid;