import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../resources/context';
import React from 'react';

const RemoveCardButton = props => {
  const {removeCard} = useGlobalContext();
  const onPressHandler = () => {
    console.log('activated');
    removeCard(props.card);
  };
  return (
    <Pressable style={styles.button} onPress={onPressHandler}>
      <Text style={styles.text}>Remove</Text>
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
    padding: '12%',
  },
});

export default RemoveCardButton;
