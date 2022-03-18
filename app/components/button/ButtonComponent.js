import React from "react";
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

function ButtonComponet(){
    return(
        <View>
             <Button title="Product Details" style={styles.btnSty} />
        </View>
    )
}
export default ButtonComponet

const styles = StyleSheet.create({
    btnSty: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 100,
      }
})