import React, { useContext, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

import { OrderStatus } from '../../components';
import CartContext from '../../context/CartContext';

const StoreCart = ({ cartState, toggleDrawer }) => {
  const [ state ] = useContext(CartContext);
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
    setStatus('error')
    setOpenOrderStatus(true)
    console.log('send status')
  }


  const list = () => (
    <Box sx={{ width: { xs:'100%', sm:400 } }} role="presentation" onKeyDown={toggleDrawer()} >
      <List sx={{ width: { xs:'100%', sm:400 } }}>
        {state.cart.map((product, index) => (
          <ListItem key={product.title+index+'cart'} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ overflow:'hidden', borderRadius:5, overflow:'hidden', width: '80px', height:'80px' }}>
                <img src={product.img} width='100%' ></img>
              </ListItemIcon>
              <ListItemText sx={{paddingLeft:'10px'}} primary={product.title} secondary='10$' />
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
    <Box sx={{ paddingX: 5 }} >
      <Typography>Formulario</Typography>
      <TextField inputRef={nameRef} fullWidth id="standard-basic" label="Tu Nombre" variant="standard" />
      <TextField inputRef={phoneRef} fullWidth id="standard-basic" label="Télefono" variant="standard" />
      <Button onClick={sendOrder} >enviar</Button>
      <Box sx={{ minHeight: '30vh' }}></Box>
    </Box>
  )

  const emptyCart = () => (
    <Typography variant='h5'>¡El carrito esta vacio! ¿qué esperas?</Typography>
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
          <Drawer sx={{ '.MuiDrawer-paperAnchorRight': { width:{ xs:'95%', sm:'auto', borderRadius: '20px 0 0 20px' } }  }} anchor='right' open={cartState} onClose={toggleDrawer()}>
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