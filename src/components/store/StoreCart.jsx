import React, { useContext, useState, useRef } from 'react';
import { backArrow } from '../../assets';
import { OrderStatus } from '../../components';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import CartContext from '../../context/CartContext';

const StoreCart = ({ showCart, toggleCart }) => {
  const [ state, dispatch, addProduct, removeProduct, setCart ] = useContext(CartContext);
  const [ showForm, setShowForm ] = useState(false);
  const [ status, setStatus ] = useState('');
  const [openOrderStatus, setOpenOrderStatus] = React.useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const sendOrder = () => {
    const order = {
      products: [
        ...state.cart
      ],
      clientData: {
        name: nameRef.current.value,
        phone: phoneRef.current.value
      }
    }
    //send to backend...
    console.log(order)

    // response success or error...
    setStatus('success')
    setOpenOrderStatus(true)
    console.log('send status')
  }


  const list = () => (
    <Box sx={{ width: { xs:'100%', sm:400 } }} role="presentation" onKeyDown={toggleCart()} >
      <List sx={{ width: { xs:'100%', sm:400 } }}>
        {state.cart.map((product, index) => (
          <ListItem key={product.title+index+'cart'} disablePadding>
            <ListItemButton alignItems='flex-start'>
              <ListItemIcon sx={{ overflow:'hidden', borderRadius:5, overflow:'hidden', width: '80px', height:'80px' }}>
                <img src={product.img} width='100%' ></img>
              </ListItemIcon>
              <ListItemText sx={{paddingLeft:'15px', '.MuiListItemText-primary': {fontWeight:'bold'} }} primary={product.title} secondary='10$' />
              <ListItemText onClick={()=>{ dispatch(removeProduct(product)) }} sx={{paddingLeft:'15px', '.MuiListItemText-primary': {textAlign:'right', color: 'rgba(230,50,50,.5)'} }} primary='eliminar' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <Typography variant='h6' textAlign='right' mt={2} mr={2}>total: 100$</Typography>
      <Box sx={{display:'flex', justifyContent:'center', py:3 }}>
        <Button variant='primary' onClick={()=>setShowForm(true)} >Ordenar</Button>
      </Box>
      { !showForm && <Box sx={{ minHeight: '30vh' }}></Box>}
    </Box>
  );


  const ContactForm = () => (
    <Box sx={{ paddingX: 5, mt: 3 }} >
      <Typography variant='h6'>Datos de contacto</Typography>
      <TextField inputRef={nameRef} fullWidth id="standard-basic" label="Tu Nombre" variant="standard" />
      <TextField inputRef={phoneRef} fullWidth id="standard-basic" label="Télefono" variant="standard" />
      <Box mt={2}>
        <Button onClick={sendOrder} variant='primary' >enviar</Button>
      </Box>
      <Box sx={{ minHeight: '30vh' }}></Box>
    </Box>
  )

  const emptyCart = () => (
    <Typography variant='h5' textAlign='center' pt={1} px={{ xs: 2, sm:6 }}>¡El carrito esta vacio! ¿qué esperas?</Typography>
  )

  const orderSuccess = () => (
    <Typography>orden enviada</Typography>
  )

  const orderError = () => (
    <Typography>ups! ocurrió un error, intentalo de nuevo</Typography>
  )

  return (
    <div>
        <>
          <Drawer hideBackdrop sx={{ '.MuiDrawer-paperAnchorRight': { width:{ xs:'95%', sm:'auto', borderRadius: '20px 0 0 20px' } }  }} anchor='right' open={showCart} onClose={toggleCart()}>
              <Box p={1} onClick={()=>{toggleCart()(); setShowForm(false)}}>
                <img src={backArrow} width='30px' alt="" />
              </Box>
              { state.cart.length <=0 && emptyCart() }
              { state.cart.length >0 && list() }
              { showForm && state.cart.length && ContactForm() }
            </Drawer>

          <OrderStatus status={status} open={openOrderStatus} setOpen={setOpenOrderStatus}  />
        </>

    </div>
  );
}

export default StoreCart;