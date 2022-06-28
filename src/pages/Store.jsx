import React, { useEffect, useReducer } from 'react'
import {  homeHeader } from '../assets';
import { SideBar, BottomNavigationMenu, StoreHeader, StoreGrid, StoreCart, StoreModal, MobileCategories } from '../components';
import { Container, Box } from '@mui/material';

import CartContext from '../context/CartContext';
import CART_INITIAL_STATE from '../store/initialState';
import { CartReducer } from '../store/cartReducer';
import { addProduct, removeProduct, setCart } from '../store/actions';

const categories = ['vestidos', 'faldas', 'blusas', 'shorts', 'bodies', 'jeans'];


const Store = () => {
  const [cartState, setCartState] = React.useState(false);
  const [categoriesState, setCategoriesState] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const [state, dispatch] = useReducer(CartReducer, CART_INITIAL_STATE);



  const toggleDrawer = () => (event) => {
    setCartState(!cartState);
  };

  const toggleCategories =  () => () => {
    setCategoriesState(!categoriesState);
  }

  const handleOpenModal = ( data ) =>{
    setModalInfo(data);
    setOpenModal(true);
  };

  return (
    <CartContext.Provider value={[ state, dispatch, addProduct, removeProduct, setCart ]}>
        <Container disableGutters sx={{ display: 'flex', position: 'relative' }} >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SideBar toggleDrawer={toggleDrawer} setProductsFiltered={setProductsFiltered}  categories={categories} />
          </Box>

          <Box sx={{ width: '100%' }}>
            <StoreHeader image={homeHeader} title='categorie Name' />
            <StoreGrid handleOpenModal={handleOpenModal} products={productsFiltered} />
            <StoreCart sx={{ display: { xs:'none', sm:'block' } }} cartState={cartState} toggleDrawer={toggleDrawer} />
            <MobileCategories sx={{ display: { xs:'block', sm:'none' } }} cartState={categoriesState} categories={categories} setProductsFiltered={setProductsFiltered} toggleDrawer={toggleCategories} />
          </Box>

          <Box sx={{ display: { xs: 'block', sm:'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
            <BottomNavigationMenu toggleDrawer={toggleCategories} setProductsFiltered={setProductsFiltered}  categories={categories} />
          </Box>

          <Box>
            <StoreModal openModal={openModal} setOpenModal={setOpenModal} info={modalInfo}  />
          </Box>

        </Container>
    </CartContext.Provider>
  )
}

export default Store