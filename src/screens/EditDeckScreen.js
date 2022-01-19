import {useGlobalContext} from '../resources/context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../Header';
import EditMenu from '../EditMenu';
import AddCardScreen from './AddCardScreen';

const EditDeckScreen = ({navigation}) => {
  const {stopEditDeck} = useGlobalContext();
  return (
    <View style={styles.container}>
      <Header title="Edit Deck" navigation={navigation} />
      <EditMenu />
      <AddCardScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default EditDeckScreen;
