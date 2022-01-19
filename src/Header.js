import React, {Component} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useGlobalContext} from './context';

const Header = ({title}) => {
  const {editScreen, stopEditDeck} = useGlobalContext();
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: '#369df7',
    display: 'flex',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 25,
    textAlign: 'center',
    padding: '9%',
  },
  temp: {
    height: 25,
    width: 25,
    backgroundColor: 'red',
  },
});
export default Header;
