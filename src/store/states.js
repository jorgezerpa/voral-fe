export function addToCart(state, action){
    const products = state.products;
    const index = products.findIndex(product=>product.id === action.payload.id);
    return {
        ...state,
        cart: [ ...state.cart, products[index]],
    };
}

export function removeFromCart(state, action){
    return {
        ...state,
        cart: [...state.cart.filter(product=>product.id!==action.payload.id)]
    }
}

export function setCart(state, action){
    return {
        ...state,
        products: [...action.payload],
    }; 
}

export function setCategories(state, action){
    return {
        ...state,
        categories: [...action.payload],
    }; 
}

