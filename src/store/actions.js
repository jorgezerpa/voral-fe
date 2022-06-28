import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT } from './ActionTypes';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product }); 
export const removeProduct = (product) => ({ type: REMOVE_PRODUCT, payload: product }); 
export const setCart = (products) => ({ type: SET_CART, payload: products })