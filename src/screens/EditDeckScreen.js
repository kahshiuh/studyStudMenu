import {useGlobalContext} from '../context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../Header';
import EditMenu from '../EditMenu';

const EditDeckScreen = ({navigation}) => {
  const {stopEditDeck} = useGlobalContext();
  const onPressHandler = () => {
    console.log('here');
    stopEditDeck();
    navigation.navigate('StudyStud');
  };
  return (
    <View style={styles.container}>
      <Header title="Edit Deck" />
      <Pressable style={styles.temp} onPress={onPressHandler}>
        <Text style={styles.text}>Return</Text>
      </Pressable>
      <EditMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    height: 50,
    width: '100%',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontFamily: 'Malayalam Sangam MN',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default EditDeckScreen;
