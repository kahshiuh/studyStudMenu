import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {useGlobalContext} from '../resources/context';

import Deck from '../components/Deck';

const Menu = () => {
  const {decks} = useGlobalContext();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
});
export default Menu;
