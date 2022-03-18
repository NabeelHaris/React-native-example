import {ActionType} from '../constants/ActionType';

const cartInitialState = {
  productList: [],
};

export const cartProductListReducer = (
  state = cartInitialState.productList,
  {type, payload},
) => {
  switch (type) {
    case ActionType.CART_PRODUCT_LIST:
      return {
        ...state,
        productList: payload,
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        productList: payload,
      };
    default:
      return state;
  }
};
