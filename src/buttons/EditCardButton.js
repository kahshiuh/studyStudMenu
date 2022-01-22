import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {useGlobalContext} from '../resources/context';

const EditCardButton = ({card}) => {
  const {turnOnEditModal, setPlaceholder, setReplaceCard} = useGlobalContext();
  const onPressHandler = () => {
    setPlaceholder(card);
    setReplaceCard(card);
    turnOnEditModal();
  };
  return (
    <Pressable style={styles.button} onPress={onPressHandler}>
      <Text style={styles.text}>Edit</Text>
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
export default EditCardButton;
