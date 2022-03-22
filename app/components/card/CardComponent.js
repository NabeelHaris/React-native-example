import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { addProductToCart } from "../../apis/CartApis";
import { setCartProduct } from "../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";

const CardComponent = (props) => {
  // props
  const navigation = useNavigation();
  const product = useSelector((state) => state.cartProducts);
  // console.log("product:", product);
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);
  const [count, setCount] = useState(0);

  function setProductToCart(item) {
    console.log("item:", item);
    console.log("cartData:", cartData);
    const cartRecord = cartData.find((ele) => ele.item.id == item.id);
    console.log("cartRecord:", cartRecord);
    if (cartRecord) {
      alert("Already exist");
    } else {
      setCount(count + 1);
      console.log("count:", count);
      setCartData((prev) => [...prev, { item, quantity: 1 }]);
      const dataForStore = [...cartData, { item, quantity: 1 }];
      dispatch(setCartProduct(dataForStore));
      console.log("dataForStore:", dataForStore);
    }
  }

  useEffect(() => {
    if (!product.productsList?.length) {
      console.log("cartData:", product);
      setCartData([]);
      setCount(0);
      console.log("d-cartData:-->", cartData);
    }
  }, []);

  return (
    <>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Cart")}
          style={styles.baskit}
        >
          <Image
            source={{
              uri: "https://p.kindpng.com/picc/s/714-7147174_png-file-svg-transparent-background-shopping-cart-icon.png",
            }}
            style={styles.tinyLogo}
          />
          <Text style={styles.counterTextstyl}>
            {cartData && cartData.length > 0 ? count : 0}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
          {props?.productsList?.map((list, i) => (
            <Card key={i}>
              <Image
                resizeMode="cover"
                source={{ uri: list.image }}
                style={styles.img}
              />
              <Card.Title style={styles.titlesty}>{list.title}</Card.Title>
              <Text style={styles.priceSty}>Rs.{list.price}$</Text>
              <Card.Divider />
              <View style={styles.btnsStyl}>
                <Button
                  title="Product Details"
                  style={styles.btnSty}
                  onPress={() =>
                    navigation.navigate("ProductDetail", {
                      itemId: list.id,
                    })
                  }
                />
                <Button
                  title="Add to cart"
                  style={styles.btnSty}
                  onPress={() => setProductToCart(list)}
                />
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  scrollStyl: {
    marginBottom: 50,
  },
  cardsty: {
    fontSize: 25,
    marginBottom: 10,
    // fontWeight: 500,
  },
  img: {
    width: 120,
    height: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
  },
  titlesty: {
    color: "black",
    fontSize: 20,
    // fontWeight: 500,
    opacity: 1,
  },
  pricesty: {
    color: "black",
    fontSize: 30,
    // fontWeight: 600,
  },
  priceSty: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  btnsStyl: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnSty: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 30,
  },
  baskit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterTextstyl: {
    position: "relative",
    right: 15,
    textAlign: "right",
    marginRight: 5,
    fontSize: 20,
    fontWeight: "700",
    color: "blue",
  },
  tinyLogo: {
    alignItems: "flex-end",
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 15,
    marginBottom: 0,
    width: 30,
    height: 30,
  },
});
