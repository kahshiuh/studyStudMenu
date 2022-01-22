import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Header';
import EditMenu from '../menus/EditMenu';
import AddCardScreen from './AddCardScreen';

const EditDeckScreen = ({navigation}) => {
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
});
export default EditDeckScreen;
