import React, {Component} from 'react';
import {Text, View, StyleSheet, Card} from 'react-native';
import {useGlobalContext} from './context';

import Deck from './Deck';

const Menu = () => {
  const {decks} = useGlobalContext();
  return (
    <View style={styles.container}>
      {decks.map(deck => {
        return <Deck name={deck.name} id={deck.id}></Deck>;
      })}
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
});
export default Menu;
