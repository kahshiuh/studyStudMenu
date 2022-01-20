import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Card,
  SafeAreaView,
} from 'react-native';
import {useGlobalContext} from '../resources/context';

import Deck from '../components/Deck';

const Menu = () => {
  const {decks} = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.deckItem}>
        {decks.map(deck => {
          return <Deck name={deck.name} id={deck.id}></Deck>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00272B',
    height: '86%',
    alignItems: 'center',
    display: 'flex',
  },
  deckItem: {},
});
export default Menu;
