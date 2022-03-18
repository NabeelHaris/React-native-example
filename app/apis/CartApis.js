import {setCartProduct} from '../components/redux/actions/CartAction';

export const getAllCartproducts = () => async dispatch => {
  const id = 2;
  const res = await fetch(`https://fakestoreapi.com/carts/user/` + id);
  const data = await res.json();
  dispatch(setCartProduct(data));
};

export const addProductToCart = data => async dispatch => {
  console.log("dispatch-data", data);
  // const res = await fetch(`https://fakestoreapi.com/carts`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     userId: 5,
  //     date:'',
  //     products: [
  //       {productId: 5, quantity: 1},
  //       {productId: 1, quantity: 5},
  //     ],
  //   }),
  // });
  // const data = await res.json();
  dispatch(setCartProduct(data));
};
