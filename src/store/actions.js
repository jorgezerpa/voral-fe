import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, SET_CATEGORIES } from './ActionTypes';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product }); 
export const removeProduct = (product) => ({ type: REMOVE_PRODUCT, payload: product }); 
export const setCart = (products) => ({ type: SET_CART, payload: products })
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories })