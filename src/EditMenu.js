import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Card,
  SafeAreaView,
} from 'react-native';
import {useGlobalContext} from './context';

const EditMenu = props => {
  const {decks} = useGlobalContext();
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};
export default EditMenu;
