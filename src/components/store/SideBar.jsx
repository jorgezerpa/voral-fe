import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, Typography, Divider } from '@mui/material';
import { logoPink } from '../../assets';
import CartContext from '../../context/CartContext';

const styles = {
  Drawer: { width: 100, flexShrink: 0, '& .MuiDrawer-paper': {   width: 100,   boxSizing: 'border-box', }},
  List: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  ListItem: { margin: '10px 0' },
  ListItemInner: { borderRadius: '20px', overflow:'hidden', width: '70px', height: '70px', position: 'relative' },
  ListItemImage: { width: '100%', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  ListItemText: { lineHeight: '25px', position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,.6)', fontSize: '12px', color: '#fff' }, 
}

const SideBar = ({ setProductsFiltered, handleSelectedCatagorie  }) => {

  const [state] = useContext(CartContext);

  const filterProducts = (categorie) => {
    const filteredProducts = state.products.filter(product=>product.categorie===categorie)
    setProductsFiltered(filteredProducts);
    handleSelectedCatagorie(categorie);
    window.scrollTo(0,0);
  }

  useEffect(()=>{
    filterProducts(state.categories[1])
  }, [])


  return (
      <Drawer sx={styles.Drawer} variant="permanent" anchor="left" >
        <List sx={styles.List} >
            <Box  component={Link} to='/'>
              <div style={styles.ListItem}>
                  <div style={styles.ListItemInner}>
                      <img style={styles.ListItemImage} src={logoPink} alt=""  />
                  </div>
              </div>
            </Box>

          <Divider />
          <Typography mt={3} mb={1}>Categorías</Typography>

          {state.categories.map((categorie, index) => (
            <div style={styles.ListItem} key={categorie+index} onClick={()=>{filterProducts(categorie) }}>
                <div style={styles.ListItemInner}>
                    <img style={styles.ListItemImage} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""  />
                    <Typography sx={styles.ListItemText} textAlign='center' variant='body1'>{ categorie }</Typography>
                </div>
            </div>
          ))}
        </List>
      </Drawer>
  );
}

export default SideBar;