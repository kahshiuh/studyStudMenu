import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../resources/context';

const ViewDeckButton = ({id}) => {
  const {viewDeck} = useGlobalContext();
  function onClickHandler() {
    viewDeck(id);
  }
  return (
    <Pressable style={styles.button} onPress={onClickHandler}>
      <Text style={styles.text}>View</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    height: 40,
    width: 50,
    backgroundColor: '#2f4858',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 10,
    textAlign: 'center',
    padding: 3,
  },
});
export default ViewDeckButton;
