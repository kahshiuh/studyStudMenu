import React, {useEffect} from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {useGlobalContext} from '../resources/context';

const SelectedButton = ({id}) => {
  const {setActivatedDeck, activatedDeck} = useGlobalContext();
  useEffect(() => {
    console.log(activatedDeck);
  }, [activatedDeck]);
  const onPressHandler = () => {
    setActivatedDeck(id);
  };
  const selector =
    id === activatedDeck ? (
      <Pressable style={styles.selected} onPress={onPressHandler}>
        <Text style={styles.selectedText}>Selected</Text>
      </Pressable>
    ) : (
      <Pressable style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Selected</Text>
      </Pressable>
    );
  return <View>{selector}</View>;
};

const styles = StyleSheet.create({
  selected: {
    borderRadius: 9,
    height: 40,
    width: 50,
    backgroundColor: '#BEA7E5',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
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
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedText: {
    color: 'black',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 13,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default SelectedButton;
