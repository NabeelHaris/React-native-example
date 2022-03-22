import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./components/pages/ecommerce/Product";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import ProductDetail from "./components/pages/ecommerce/ProductDetail";
import Cart from "./components/cart/Cart";
import "localstorage-polyfill";
import Signup from "./components/pages/signup/Signup";
import LinkingScreen from "./components/pages/LinkingScreen";


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="Linking" component={LinkingScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <View>
    //   <Text style={styles.header}>Learning React-native</Text>
    //   {/* <FontAwesome5 name={'plus-solid'}  style={{fontSize:80}}/> */}

    //   <Provider store={store}>
    //     <ProductList />
    //   </Provider>

    //   {/* <ModelExample /> */}
    //   {/* <ProductList /> */}
    //   {/* <Example /> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#a1a1a178",
  },
  header: {
    width: "100%",
    lineHeight: 60,
    backgroundColor: "#a1a1a178",
    fontWeight: "600",
    // '#41a6d9',
    fontSize: 30,

    color: "black",
    margin: "auto",
    textAlign: "center",
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
});

export default App;
