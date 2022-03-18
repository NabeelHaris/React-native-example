import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCartproducts} from '../../apis/CartApis';
import { setCartProduct } from '../redux/actions/CartAction';
import {connect} from 'react-redux';
const Cart = props => {
  const product = useSelector(state => state.cartProducts);
  console.log('cart-product:', product);

  useEffect(() => {
    // props.getAllCartproducts();
    // return () => {
    //   cleanup
    // };
    setCartProduct
  }, []);
  return (
    <View>
      <Text>Cart Component</Text>
      {/* {props.productList?.productList?.products?.map((list, i) => (
        <ScrollView key={i}>
          <Card >
            <Text style={styles.priceSty}>Quantity: {list.quantity}</Text>
            <Card.Divider />
          </Card>
        </ScrollView>
      ))} */}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    productList: state.cartProducts,
  };
};

const mapDispatchToProps = {
  // getAllCartproducts,
  setCartProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  cardsty: {
    fontSize: 25,
    marginBottom: 10,
    // fontWeight: 500,
  },
  img: {
    width: 120,
    height: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
  },
  titlesty: {
    color: 'black',
    fontSize: 20,
    // fontWeight: 500,
    opacity: 1,
  },
  pricesty: {
    color: 'black',
    fontSize: 30,
    // fontWeight: 600,
  },
  priceSty: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  btnsStyl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnSty: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 30,
  },
  baskit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterTextstyl: {
    position: 'relative',
    right: 15,
    textAlign: 'right',
    marginRight: 5,
    fontSize: 20,
    fontWeight: '700',
    color: 'blue',
  },
  tinyLogo: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 15,
    marginBottom: 0,
    width: 30,
    height: 30,
  },
});
