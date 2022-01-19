import React, {useEffect} from 'react';
import {useGlobalContext} from '../resources/context';
import Header from '../Header';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import Menu from '../Menu';

const HomeScreen = ({navigation}) => {
  const {editScreen} = useGlobalContext();
  useEffect(() => {
    console.log('Hello');
    if (editScreen) {
      navigation.navigate('EditDeckScreen');
    }
    return () => {};
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
});

export default HomeScreen;
