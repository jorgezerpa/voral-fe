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

const MobileCategories = ({ openState, toggleDrawer, categories, setProductsFiltered, handleSelectedCatagorie }) => {
  const [ state ] = useContext(CartContext);

  const filterProducts = (categorie) => {
    const filteredProducts = state.products.filter(product=>product.categorie===categorie)
    setProductsFiltered(filteredProducts);
    handleSelectedCatagorie(categorie)
  }

  useEffect(()=>{
    filterProducts(categories[1])
  }, [])


  return (
    <div>
        <Drawer sx={{ display:{xs:'block', sm:'none', '.MuiDrawer-paperAnchorBottom': { borderRadius:'20px 20px 0 0', padding:'10px 10px 100px 10px' } } }} anchor='bottom' open={openState} openClose={toggleDrawer()}>
          <Grid container spacing={2} sx={{  }}>
            {categories.map((categorie, index) => (
              <Grid item xs={4} sx={{ margin: '10px 0' }} key={categorie+index} onClick={()=>{filterProducts(categorie); const a = toggleDrawer(); a() }}>
                    <div style={{ borderRadius: '20px', overflow:'hidden', width: '100%', height: '100px', position: 'relative' }}>
                        <img style={{ width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                        <Typography sx={{ lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }} textAlign='center' variant='body1'>{ categorie }</Typography>
                    </div>
                
              </Grid>
            ))}
          </Grid>

        </Drawer>
    </div>
  );
}

export default MobileCategories;