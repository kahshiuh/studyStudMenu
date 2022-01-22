import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useGlobalContext} from './resources/context';
import CreateNewCardButton from './buttons/CreateNewCardButton';
import ReturnButton from './buttons/ReturnButton';
import AddDeckButton from './buttons/AddDeckButton';
const Header = ({title, navigation}) => {
  const {editScreen} = useGlobalContext();
  const buttons = editScreen ? (
    <View style={styles.buttonContainer}>
      <CreateNewCardButton />
      <ReturnButton navigation={navigation} />
    </View>
  ) : (
    <View style={styles.buttonContainer}>
      <AddDeckButton />
    </View>
  );
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {buttons}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '14%',
    width: '100%',
    backgroundColor: '#369df7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 14,
    width: '35%',
    height: '50%',
    justifyContent: 'center',
    backgroundColor: '#2f4858',
    marginRight: '5%',
  },
  textContainer: {
    marginTop: '14%',
    height: '18%',
  },
  buttonContainer: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 23,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 13,
    textAlign: 'center',
  },
});
export default Header;
