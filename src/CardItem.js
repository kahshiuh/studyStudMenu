import React from 'react';
import {Text, View, StyleSheet, Card} from 'react-native';
import EditCardButton from './buttons/EditCardButton';
import RemoveCardButton from './buttons/RemoveCardButton';

const CardItem = props => {
  return (
    <View style={styles.card} id={props.id} key={props.id}>
      <Text style={styles.text}>
        {props.term}: {props.defination}
      </Text>
      <EditCardButton />
      <RemoveCardButton />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    height: 150,
    marginVertical: 10,
    width: 300,
    backgroundColor: '#c880b7',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default CardItem;
