import React from 'react';
import {Text, View, StyleSheet, Card} from 'react-native';
import {useGlobalContext} from './context';
import RemoveDeckButton from './buttons/RemoveDeckButton';
import EditDeckButton from './buttons/EditDeckButton';
import ViewDeckButton from './buttons/ViewDeckButton';

const Deck = props => {
  return (
    <View style={styles.deck} id={props.id} key={props.id}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.buttonContainer}>
        <RemoveDeckButton id={props.id}> </RemoveDeckButton>
        <EditDeckButton id={props.id}> </EditDeckButton>
        <ViewDeckButton id={props.id}> </ViewDeckButton>
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
    backgroundColor: '#c880b7',
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
