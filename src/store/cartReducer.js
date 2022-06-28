import { SET_CART, ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY, CHANGE_MANUALLY_PRODUCT_QUANTITY  } from './ActionTypes';
import { setCart, addToCart, removeFromCart, increaseProductQuantity, decreaseProductQuantity, changeManuallyProductQuantity } from './states';

export function CartReducer(state, action){
    switch(action.type){
        case ADD_PRODUCT :
            return addToCart(state, action);
        case REMOVE_PRODUCT :
            return removeFromCart(state, action)
        case SET_CART:
            return setCart(state, action)
        default:
            return state;
    }
}