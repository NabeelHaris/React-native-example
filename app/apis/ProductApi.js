// import { useDispatch } from "react-redux";
import {setProducts} from '../components/redux/actions/ProductActions';
import {selectedProducts} from '../components/redux/actions/ProductActions';
import axios from 'axios';

export const getProductList = () => async dispatch => {
  // const dispatch = useDispatch();
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  dispatch(setProducts(data));
};

export const getProductDetail = async itemId => {
  const res = await fetch('https://fakestoreapi.com/products/' + itemId);
  const data = await res.json();
  return data;
};
