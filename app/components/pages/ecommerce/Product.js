import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import CardComponent from '../../card/CardComponent';
import {getProductList} from '../../../apis/ProductApi'
import { connect } from 'react-redux';

const ProductList = (props) => {
  // const Stack = createNativeStackNavigator();
  // const navigation = useNavigation();
  // const products = useSelector(state => state);
  // const dispatch = useDispatch();
  // console.log('products', products);
  // const [data, setData] = useState([]);

  // function getList() {
  //   axios.get('https://fakestoreapi.com/products').then(res => {
  //     // console.log('res', res)
  //     dispatch(setProducts(res.data));
  //     // setData(res.data);
  //   });
  // }

  useEffect(() => {
    // getList();
    props.getProductList()
  }, []);

  return (
    <View>
      <Text style={styles.listTitle}>Product List</Text>

      {/* <CardComponent productList={data} /> */}
      <CardComponent productsList={props.products.products} />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts
  }
}

const mapDispatchToProps = {
  getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});
