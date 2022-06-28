import React, { useContext, useState } from 'react';
import { cartIcon } from '../../assets';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, Drawer } from '@mui/material';
import CartContext from '../../context/CartContext';

const ProductDetails = ({ openProductDetails, setOpenProductDetails, info }) => {
  const [ state, dispatch, addProduct, removeProduct ] = useContext(CartContext);

  const handleAddToCart = (item) => () =>{ dispatch(addProduct(item)); }
  const handleRemoveFromCart = (item) => () =>{ dispatch(removeProduct(item)); }
  const handleClose = () => setOpenProductDetails(false);

  const isAdded = () => {
    let status = false;
    state.cart.forEach(product=>{
      if(product.id === info.id) status = true;
    })
    return status
  }

  return (
    <div>
      <Dialog open={openProductDetails} onClose={handleClose} scroll='paper' sx={{ display: { xs:'none', sm:'block' }, '	.MuiDialog-paper': { borderRadius:'50px' } }} >
        <DialogContent >
            <Box sx={{ display:'flex', justifyContent:'center'  }}>
              <img src={info.img} alt="" style={{ width: '50%', margin:' 0 auto', borderRadius: '30px' }} />
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  { info.title }
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: '.8rem' }}>
                  {/* { info.description } */}
                  una super descripcion que hae que la people compre!
            </Typography>
        </DialogContent>
        <DialogActions>   
          <Box p={1}>
            { !isAdded() && <Button onClick={handleAddToCart(info)} variant='primary'>Agregar</Button> }
            { isAdded() && <Button onClick={handleRemoveFromCart(info)} variant='primary'>remover</Button> }
            </Box>       
        </DialogActions>
      </Dialog>


      <Drawer sx={{ display:{xs:'block', sm:'none', '.MuiDrawer-paperAnchorBottom': { borderRadius:'20px 20px 0 0', padding:'10px 10px 100px 10px' } } }} anchor='top' open={openProductDetails} onClose={handleClose}>
          <Box sx={{ display:'flex', flexWrap:'wrap', width: '100%', height: '100%', background: '#fff', borderRadius: '20px 20px 0 0', padding: '1rem' }}>
            <Box sx={{ width: '100%' }} onClick={handleClose} >close</Box>
            <Box sx={{ borderRadius:'20px', width: '100%', height: '70vh', position: 'relative', backgroundImage: `url(${info.img})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}></Box>           
            <Box sx={{ width: '70%' }} >
              <Typography mt={2} variant='h6'>{ info.title }</Typography>
              <Typography variant='h6' gutterBottom >10$</Typography>
              <Typography mt={2} variant='body1'>una super descripcion que hae que la people compre!</Typography>
              <Box sx={{minHeight:'30vh', width: '100%'}}></Box>
            </Box> 
            <Box>
                { !isAdded() && <img onClick={handleAddToCart(info)} width='30px' src={cartIcon} alt='' /> }
                { isAdded() && <img onClick={handleRemoveFromCart(info)} width='30px' src={cartIcon} alt='' />  }
            </Box>
          </Box>
      </Drawer>








    </div>
  )
}

export default ProductDetails;


