import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../context';

const ViewDeckButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>VIEW</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    height: 40,
    width: 50,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 10,
    textAlign: 'center',
    padding: '12%',
  },
});
export default ViewDeckButton;
