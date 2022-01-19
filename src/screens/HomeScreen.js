import React, {useEffect} from 'react';
import {useGlobalContext} from '../context';
import Header from '../Header';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import Menu from '../Menu';

const HomeScreen = ({navigation}) => {
  const {editScreen} = useGlobalContext();
  const onPressHandler = () => {
    navigation.navigate('EditDeckScreen');
  };
  useEffect(() => {
    navigation.navigate('EditDeckScreen');
    console.log('Hello');
  }, [editScreen]);
  return (
    <View style={styles.container}>
      <Header title="StudyStud" />
      <Menu />
    </View>
  );
};
const styles = StyleSheet.create({
  whole: {
    flex: 1,
  },
  temp: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
