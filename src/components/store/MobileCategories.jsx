import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import CartContext from '../../context/CartContext';

const MobileCategories = ({ showCategories, toggleCategories, setProductsFiltered, handleSelectedCatagorie }) => {
  const [ state ] = useContext(CartContext);

  const filteredProducts = (categorie) => {
    const filteredProducts = state.products.filter(product=>product.categorie===categorie)
    if(categorie==='todo') setProductsFiltered(state.products);
    if(categorie!=='todo') setProductsFiltered(filteredProducts);
    handleSelectedCatagorie(categorie);
    window.scrollTo(0,0);
  }

  useEffect(()=>{
    filteredProducts('todo')
  }, [state.products])




  return (
    <div>
        <Drawer sx={{ display:{xs:'block', sm:'none', '.MuiDrawer-paperAnchorBottom': { borderRadius:'20px 20px 0 0', padding:'10px 10px 100px 10px' } } }} anchor='bottom' open={showCategories} onClose={toggleCategories()}>
          <Grid container spacing={2} sx={{  }}>

              <Grid item xs={4} sx={{ margin: '10px 0' }} onClick={()=>{filteredProducts('todo'); const toggler = toggleCategories(); toggler() }}>
                    <div style={{ borderRadius: '20px', overflow:'hidden', width: '100%', height: '100px', position: 'relative' }}>
                        <img style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                        <Typography sx={{ lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }} textAlign='center' variant='body1'>{ 'todo' }</Typography>
                    </div>
              </Grid>
            
            {state.categories.map((categorie, index) => (
              <Grid item xs={4} sx={{ margin: '10px 0' }} key={categorie+index} onClick={()=>{filteredProducts(categorie.name); const toggler = toggleCategories(); toggler() }}>
                    <div style={{ borderRadius: '20px', overflow:'hidden', width: '100%', height: '100px', position: 'relative' }}>
                        <img style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                        <Typography sx={{ lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }} textAlign='center' variant='body1'>{ categorie.name }</Typography>
                    </div>
              </Grid>
            ))}
          </Grid>

        </Drawer>
    </div>
  );
}

export default MobileCategories;