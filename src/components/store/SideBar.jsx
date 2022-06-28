import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CartContext from '../../context/CartContext';

const drawerWidth = 100;

export default function SideBar({ toggleDrawer, categories, setProductsFiltered  }) {

  const [state] = useContext(CartContext);

  const filterProducts = (categorie) => {
    const filteredProducts = state.products.filter(product=>product.categorie===categorie)
    setProductsFiltered(filteredProducts);
  }


  useEffect(()=>{
    filterProducts(categories[1])
  }, [])



  return (
      <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {   width: drawerWidth,   boxSizing: 'border-box', } }} variant="permanent" anchor="left" >
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            
            <div style={{ margin: '10px 0' }} onClick={toggleDrawer()}>
                <div style={{ borderRadius: '20px', overflow:'hidden', width: '70px', height: '70px', position: 'relative' }}>
                    <img style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                    <Typography sx={{ lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }} textAlign='center' variant='body1'>Carrito</Typography>
                </div>
            </div>

            <Divider />

          {categories.map((categorie, index) => (
            <div style={{ margin: '10px 0' }} key={categorie+index} onClick={()=>{filterProducts(categorie)}}>
                <div style={{ borderRadius: '20px', overflow:'hidden', width: '70px', height: '70px', position: 'relative' }}>
                    <img style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                    <Typography sx={{ lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }} textAlign='center' variant='body1'>{ categorie }</Typography>
                </div>
            </div>
          ))}
        </List>
      </Drawer>
  );
}