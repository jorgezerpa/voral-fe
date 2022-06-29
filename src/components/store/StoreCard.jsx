import React, { useContext, useState } from 'react'
import { Box, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CartContext from '../../context/CartContext';


const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: '.5s all',
    '&:hover': {
      transform: 'scale(.95)'
    }
  }));


const StoreCard = ({ item, handleProductDetails }) => {
    const [state, dispatch, addProduct, removeProduct] = useContext(CartContext);   

    const onClick = (data) => (e) => handleProductDetails(data);
    const handleAddToCart = (item) => (e) =>{e.stopPropagation(); dispatch(addProduct(item)); }
    const handleRemoveFromCart = (item) => (e) =>{ e.stopPropagation(); dispatch(removeProduct(item)); }

    const isAdded = () => {
      let status = false;
      state.cart.forEach(product=>{
        if(product.id === item.id) status = true;
      })
      return status
    }

    return (
      <Box onClick={()=>handleProductDetails(item, isAdded)} sx={{position: 'relative', borderRadius: '10%', overflow:'hidden',transition: '.3s all', '&:hover':{ transform: 'scale(.95)' }, boxShadow: '1px 1px 1px 1px rgba(0,0,0,.2)' }}>
          <img src={`${item.image}`} alt={item.name} loading="lazy" style={{borderBottomLeftRadius: '13%',borderBottomRightRadius: '13%',display: 'block',width: '100%'}} />
          <Box sx={{ display:{ xs:'none', sm:'block' }, padding: '.6rem 2rem .6rem 1rem', borderRadius: '10% 0 0 10%' }}>
              <Typography sx={{ textAlign:'right', fontSize: '.85rem', fontWeight: 'bold'}} onClick={onClick(item)} variant='h6'>{ item.name }</Typography>
              <Typography sx={{ textAlign:'right', fontSize: '.75rem'}} variant='body1'>{ item.price }$</Typography>
          </Box>
          <Box p={1} sx={{ display:{ xs:'none', sm:'flex' }, justifyContent:'center' }}>
            { !isAdded() && <Button onClick={handleAddToCart(item)} variant='cardButton'>Agregar</Button> }
            { isAdded() && <Button onClick={handleRemoveFromCart(item)} variant='cardButton'>remover</Button> }
            </Box>       
      </Box>
    )
}

export default StoreCard