import {combineReducers} from 'redux';
import {cartProductListReducer} from './CartReducer';
import {productReducer} from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  cartProducts: cartProductListReducer,
});

export default reducers;
