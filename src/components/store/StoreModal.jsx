import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import CartContext from '../../context/CartContext';

const StoreModal = ({ openModal, setOpenModal, info }) => {
  const [ state, dispatch, addProduct, removeProduct ] = useContext(CartContext);

  const handleAddToCart = (item) => () =>{ dispatch(addProduct(item)); }
  const handleRemoveFromCart = (item) => () =>{ dispatch(removeProduct(item)); }
  const handleClose = () => setOpenModal(false);

  const isAdded = () => {
    let status = false;
    state.cart.forEach(product=>{
      if(product.id === info.id) status = true;
    })
    return status
  }

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose} scroll='paper' sx={{ '	.MuiDialog-paper': { borderRadius:'50px' } }} >
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
    </div>
  )
}

export default  StoreModal;




// return (


  
// );


      // <Box sx={style} id='scroll-dialog-title'>
      //       <Box mt={2}>
      //         { !isAdded && <Button onClick={handleAddToCart(info)} variant='primary'>Agregar</Button> }
      //         { isAdded && <Button onClick={handleRemoveFromCart(info)} variant='primary'>remover</Button> }
      //       </Box>
      //     </Box>