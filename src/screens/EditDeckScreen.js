import {useGlobalContext} from '../context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../Header';
import EditMenu from '../EditMenu';

const EditDeckScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('StudyStud');
  };
  return (
    <View style={styles.container}>
      <Header title="Edit Deck" />
      <Pressable style={styles.temp} onPress={onPressHandler}></Pressable>
      <EditMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
export default EditDeckScreen;
