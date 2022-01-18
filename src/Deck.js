import React, {Component} from 'react';
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
        <EditDeckButton> </EditDeckButton>
        <ViewDeckButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 750,
    width: 400,
    backgroundColor: '#9f6ba0',
    alignItems: 'center',
    display: 'flex',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deck: {
    marginVertical: 10,
    width: 200,
    backgroundColor: '#c880b7',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Deck;
