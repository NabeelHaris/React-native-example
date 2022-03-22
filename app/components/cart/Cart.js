import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Animated,
  Alert,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCartProduct } from "../redux/actions/CartAction";
import { connect } from "react-redux";
import { RectButton } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";

const Cart = (props) => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  let [totalPrice, setTotalPrice] = useState(0);
  console.log("cart-product:", product);

  function incQuantity(item, quantity, index) {
    product.productList[index].quantity = quantity + 1;
    console.log("inc-quantity:", quantity + 1);
    totalPrice += item.price;
    setTotalPrice(totalPrice);
  }
  function decQuantity(item, quantity, index) {
    if (quantity > 1) {
      product.productList[index].quantity = quantity - 1;
      // setQuantity(quantityCount - 1);
      totalPrice -= item.price;
      setTotalPrice(totalPrice);
    } else {
      Alert.alert("Delete", "Do you want delete item ?", [
        {
          text: "Yes",
          onPress: () => deleteItem(index),
        },
        {
          text: "No",
          cancelable: true,
          onDismiss: () => Alert.alert("Cancel deletion"),
        },
      ]);
    }
  }
  function deleteItem(index) {
    console.log("deleteIndex:", index);
    product.productList.splice(index, 1);
    console.log("newlist:", product.productList);
    dispatch(setCartProduct(product.productList));
    if (product.productList.length == 0) {
      setTotalPrice(0);
      navigation.navigate("ProductList")
    }
  }

  function getTotalAmount() {
    let price = 0;
    product.productList &&
      product.productList.length > 0 &&
      product.productList.map((list, i) => {
        console.log("list--->", list);
        price += list.item.price;
      });
    setTotalPrice(price);
  }
  useEffect(() => {
    getTotalAmount();
    // setCartProduct;
  }, []);
  return (
    <View>
      <ScrollView>
        <Text style={styles.cartTitle}>Cart Component</Text>

        {product.productList?.map((data, i) => (
          <View style={styles.card} key={i}>
            <View style={styles.info}>
              <Image
                resizeMode="cover"
                source={{ uri: data.item.image }}
                style={styles.img}
              />

              <View>
                <Text style={styles.titleText}>{data.item.title}</Text>
                <View style={styles.counter}>
                  <Text
                    style={styles.incBtn}
                    onPress={() => incQuantity(data.item, data.quantity, i)}
                  >
                    +
                  </Text>
                  <Text style={styles.quantity}>{data.quantity}</Text>
                  <Text
                    style={styles.incBtn}
                    onPress={() => decQuantity(data.item, data.quantity, i)}
                  >
                    -
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.priceSty}>
              <Text style={styles.priceTextSty}>Rs/. {data.item.price} $</Text>
            </View>
          </View>
        ))}
        <View style={styles.total}>
          <Text style={styles.totalText}>Total: {totalPrice}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    productList: state.cartProducts,
  };
};

const mapDispatchToProps = {
  // getAllCartproducts,
  setCartProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  cartTitle: {
    color: "#58a6ff",
    fontWeight: "800",
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: 350,
    height: "auto",
    marginBottom: 30,
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: 20,
    borderRadius: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  titleText: {
    width: 245,
    marginTop: 10,
    fontWeight: "600",
    color: "black",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: "auto",
    marginLeft: 10,
    marginTop: "auto",
    marginBottom: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  priceSty: {
    marginRight: "auto",
    marginLeft: 35,
    marginTop: 15,
  },
  priceTextSty: {
    fontWeight: "700",
    color: "#58a6ff",
    marginBottom: 10,
  },
  counter: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
  },
  incBtn: {
    color: "white",
    backgroundColor: "#58a6ff",
    borderRadius: 50,
    width: 26,
    height: 28,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  quantity: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 10,
    paddingRight: 10,
  },
  total: {
    alignItems: "flex-end",
    marginRight: 25,
    marginBottom: 20,
  },
  totalText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
});
