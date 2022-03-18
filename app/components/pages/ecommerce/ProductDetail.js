import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {selectedProducts} from '../../redux/actions/ProductActions';
import axios from 'axios';
import {getProductDetail} from '../../../apis/ProductApi';

function ProductDetail({route}) {
  const {itemId} = route.params;
  // console.log('id:', itemId);
  const dispatch = useDispatch();
  // const product = useSelector(state => state.product);
  const [detail, setDetail] = useState({});

  async function setProductDetails() {
    await getProductDetail(itemId)
      .then(res => {
        console.log('detail-data:', res);
        setDetail(res);
      })
      .catch(error => {});
  
  }
  useEffect(() => {
    if (itemId && itemId !== '') setProductDetails();
  }, []);
  function addProductToCart() {
    dispatch(selectedProducts(detail));
  }
  return (
    <View>
      <ScrollView>
        <Card>
          <Text style={styles.category}>
            <Text style={styles.headText}>Category: </Text>
            {detail?.category}
          </Text>
          <Image
            resizeMode="cover"
            source={{uri: detail?.image}}
            style={styles.img}
          />
          <Card.Title style={styles.titlesty}>
            <Text style={styles.headText}>Title:</Text> {detail?.title}
          </Card.Title>
          <Text style={styles?.priceSty}>Price: Rs.{detail?.price}$</Text>
          <Text style={styles?.descStyle}>
            <Text style={styles?.headText}>Description:</Text>
            {detail?.description}
          </Text>
          <Card.Divider />
          <Button
            title="Add to cart"
            style={styles?.btnSty}
            onPress={() => addProductToCart()}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  cardsty: {
    fontSize: 25,
    marginBottom: 10,
    // fontWeight: 500,
  },
  category: {
    textAlign: 'center',
    color: '#6d747e',
    marginBottom: 10,
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 290,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
  },
  titlesty: {
    color: '#6d747e',
    fontSize: 20,
    // fontWeight: 500,
    opacity: 1,
  },
  pricesty: {
    color: '#6d747e',
    fontSize: 30,
    // fontWeight: 600,
  },
  priceSty: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  descStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#6d747e',
  },
  headText: {
    color: 'black',
  },
  btnSty: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 30,
  },
});

// https://fakestoreapi.com/products/1
