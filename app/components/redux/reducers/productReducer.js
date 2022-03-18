import {ActionType} from '../constants/ActionType';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = cartInitialState,
  {type, payload},
) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return {...state, product: payload};
    default:
      return state;
  }
};
