import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Card, ButtonGroup, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

function Signup(params) {
  const navigation = useNavigation();
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  function goForSignup() {
    setUser(name, email, password);
    navigation.navigate("ProductList");
    // axios.post("https://fakestoreapi.com/users", user).then((res) => {
    //   console.log("res:", res);
    // });
  }
  return (
    <View>
      <View style={styles.cardView}>
        <Card containerStyle={{ height: 550 }}>
          <Card.Title style={styles.titlesty}>Sign up</Card.Title>
          {/* <Text style={styles.priceSty}></Text> */}
          <Card.Divider />
          <View>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={name}
              placeholder="Enter username"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter email"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Enter password"
            />
          </View>
          <View style={styles.btnView}>
            <Button
              title="Signup"
              buttonStyle={{
                borderRadius: 10,
                height: 50,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => goForSignup()}
            />
            <Text style={styles.or}>Or</Text>
            <Button
              title="Login"
              buttonStyle={{
                height: 50,
                borderRadius: 10,
                backgroundColor: "lightgray",
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
        </Card>
      </View>
    </View>
  );
}
export default Signup;
const styles = StyleSheet.create({
  cardView: {
    marginTop: 50,
  },
  titlesty: {
    fontWeight: "700",
    fontSize: 20,
    color: "black",
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 12,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
  },
  label: {
    marginLeft: 0,
    padding: 5,
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  btnView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    width: 200,
    height: 50,
  },
  or: {
    color: "black",
    fontSize: 17,
    fontWeight: "600",
    marginRight: "auto",
    marginLeft: "auto",
  },
});
