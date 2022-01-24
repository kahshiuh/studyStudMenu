import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RemoveDeckButton from '../buttons/RemoveDeckButton';
import EditDeckButton from '../buttons/EditDeckButton';
import EditDeckNameButton from '../buttons/EditDeckNameButton';
import SelectedButton from '../buttons/SelectedButton';

const Deck = props => {
  return (
    <View style={styles.deck} id={props.id} key={props.id}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.buttonContainer}>
        <EditDeckNameButton id={props.id}></EditDeckNameButton>
        <EditDeckButton id={props.id}> </EditDeckButton>
        <RemoveDeckButton id={props.id}> </RemoveDeckButton>
        <SelectedButton id={props.id}></SelectedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deck: {
    height: 150,
    marginVertical: 10,
    width: 300,
    backgroundColor: '#4E8098',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Deck;
