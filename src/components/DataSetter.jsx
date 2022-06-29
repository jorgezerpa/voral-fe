import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';

const DataSetter = () => {
    const [state, dispatch, addProduct, removeProduct, setCart, setCategories] = useContext(CartContext);

    useEffect(()=>{
        fetch('http://localhost:8000/api/v1/products/')
            .then(data=>data.json())
            .then(products=>{
                dispatch(setCart(products.data));
            });

        fetch('http://localhost:8000/api/v1/categories/')
            .then(data=>data.json())
            .then(categories=>{
                dispatch(setCategories(categories.data));
            });
    }, [])

  return (
    <></>
  )
}

export default DataSetter