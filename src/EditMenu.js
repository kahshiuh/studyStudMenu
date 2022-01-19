import {CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import {Text, ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import {useGlobalContext} from './context';
import CardItem from './CardItem.js';

const EditMenu = props => {
  const {decks, selectedDeck} = useGlobalContext();
  const card = decks.find(element => element.id === selectedDeck);
  let i = -1;
  console.log(props);
  console.log(card);
  return (
    <View style={styles.container}>
      {card.terms.map(() => {
        i++;
        return (
          <CardItem
            key={i}
            term={card.terms[i]}
            defination={card.definations[i]}></CardItem>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#00272B',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
export default EditMenu;
