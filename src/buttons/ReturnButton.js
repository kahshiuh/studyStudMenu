import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useGlobalContext} from '../resources/context';

const ReturnButton = ({navigation}) => {
  const {stopEditDeck} = useGlobalContext();
  const onPressHandler = () => {
    stopEditDeck();
    navigation.navigate('StudyStud');
  };
  return (
    <Pressable style={styles.button} onPress={onPressHandler}>
      <Text style={styles.buttonText}>Return</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '12%',
    width: '100%',
    backgroundColor: '#369df7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 14,
    width: '35%',
    height: '50%',
    justifyContent: 'center',
    backgroundColor: '#2f4858',
    marginRight: '5%',
  },
  textContainer: {
    marginTop: '14%',
    height: '18%',
  },
  buttonContainer: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 13,
    textAlign: 'center',
  },
});
export default ReturnButton;
