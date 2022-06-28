import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CartContext from '../../context/CartContext';
import { Typography } from '@mui/material';

const StoreCart = ({ cartState, toggleDrawer }) => {
  const [ state ] = useContext(CartContext);

  const list = () => (
    <Box sx={{ width: 400 }} role="presentation" onKeyDown={toggleDrawer()} >
      <List>
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
        <Button variant='primary'>Ordenar</Button>
      </Box>
    </Box>
  );

  return (
    <div>
        <>
          <Drawer sx={{ display:{xs:'none', sm:'block' } }} anchor='right' open={cartState} onClose={toggleDrawer()}>
            {list()}
          </Drawer>
        </>
    </div>
  );
}

export default StoreCart;