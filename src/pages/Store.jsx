import React, { useReducer, useState } from 'react'
import {  homeHeader } from '../assets';
import { SideBar, BottomNavigationMenu, StoreHeader, StoreGrid, StoreCart, ProductDetails, MobileCategories } from '../components';
import { Container, Box } from '@mui/material';

import CartContext from '../context/CartContext';
import CART_INITIAL_STATE from '../store/initialState';
import { CartReducer } from '../store/cartReducer';
import { addProduct, removeProduct, setCart } from '../store/actions';


const Store = () => {
  const [showCart, setShowCart] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [openProductDetails, setOpenProductDetails] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [productDetailsInfo, setProductDetailsInfo] = useState({});
  const [productsFiltered, setProductsFiltered] = useState([]);

  const [state, dispatch] = useReducer(CartReducer, CART_INITIAL_STATE);
  const handleSelectedCategorie = (categorie) => setSelectedCategorie(categorie);
  const toggleCart = () => (event) => setShowCart(!showCart);
  const toggleCategories =  () => () => setShowCategories(!showCategories);
  const handleOpenProductDetails = ( data ) =>{ setProductDetailsInfo(data); setOpenProductDetails(true) };

  return (
    <CartContext.Provider value={[ state, dispatch, addProduct, removeProduct, setCart ]}>
        <Container disableGutters sx={{ display: 'flex', position: 'relative' }} >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SideBar handleSelectedCatagorie={handleSelectedCategorie} setProductsFiltered={setProductsFiltered}   />
          </Box>

          <Box sx={{ width: '100%' }}>
            <StoreHeader image={homeHeader} title={selectedCategorie}  />
            <StoreGrid toggleCart={toggleCart} handleOpenProductDetails={handleOpenProductDetails} products={productsFiltered} />
            <StoreCart sx={{ display: { xs:'none', sm:'block' } }} showCart={showCart} toggleCart={toggleCart} />
            <MobileCategories handleSelectedCatagorie={handleSelectedCategorie} sx={{ display: { xs:'block', sm:'none' } }} showCategories={showCategories} setProductsFiltered={setProductsFiltered} toggleCategories={toggleCategories} />
          </Box>

          <Box sx={{ display: { zIndex:10000, xs: 'block', sm:'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
            <BottomNavigationMenu toggleCart={toggleCart} toggleCategories={toggleCategories} setProductsFiltered={setProductsFiltered} />
          </Box>

          <Box>
            <ProductDetails openProductDetails={openProductDetails} setOpenProductDetails={setOpenProductDetails} info={productDetailsInfo}  />
          </Box>

        </Container>
    </CartContext.Provider>
  )
}

export default Store