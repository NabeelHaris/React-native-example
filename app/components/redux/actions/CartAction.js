import {ActionType} from '../constants/ActionType';

export const setCartProduct = cartProductsList => {
  return {
    type: ActionType.CART_PRODUCT_LIST,
    payload: cartProductsList,
  };
};

export const addToCart = product => {
    return {
        type: ActionType.ADD_TO_CART,
        payload:product
    }
}
