import {Text, View, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

function Example() {
  const [counter, setValue] = useState(0);

  function increment() {
    setValue(counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setValue(counter - 1);
    }
  }

  return (
    <View>
      <Text style={styles.titleText}>Functional Component Example.</Text>
      <Button title="Increment" color="#41a6d9" onPress={() => increment()} />
      <Text style={styles.intValue}>{counter}</Text>
      <Button title="Increment" color="red" onPress={() => decrement()} />
    </View>
  );
}

// function mapStateToProps(state){
//   return {
//     counter:state.counter
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment : () => dispatch({type:'INCREASE_COUNTER'}),
//     decrement : () => dispatch({type:'DECREASE_COUNTER'})
//   }
// }
export default Example;
// export default connect(mapStateToProps, mapDispatchToProps)(Example);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    color: 'black',
  },
  intValue: {
    fontSize: 50,
    color: 'black',
  },
});
