import React, {useEffect} from 'react';
import {useGlobalContext} from '../resources/context';
import Header from '../Header';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import Menu from '../menus/Menu';
import AddDeckScreen from './AddDeckScreen';

const HomeScreen = ({navigation}) => {
  const {editScreen} = useGlobalContext();
  useEffect(() => {
    if (editScreen) {
      navigation.navigate('EditDeckScreen');
    }
    return () => {};
  }, [editScreen]);
  return (
    <View style={styles.container}>
      <Header title="StudyStud" />
      <Menu />
      <AddDeckScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  whole: {
    flex: 1,
  },
});

export default HomeScreen;
