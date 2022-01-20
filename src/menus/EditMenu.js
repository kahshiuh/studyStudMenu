import React from 'react';
import {Text, ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import {useGlobalContext} from '../resources/context';
import CardItem from '../components/CardItem';

const EditMenu = props => {
  const {decks, selectedDeck} = useGlobalContext();
  const card = decks.find(element => element.id === selectedDeck);
  let i = -1;
  return (
    <View style={styles.container}>
      {card.terms.map(() => {
        i++;
        return (
          <CardItem
            key={i}
            id={i}
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
    display: 'flex',
    flex: 1,
    backgroundColor: '#00272B',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    pading: 5,
  },
});
export default EditMenu;
