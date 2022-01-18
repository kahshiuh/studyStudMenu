/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import Header from './src/Header';
import Menu from './src/Menu';
import {AppProvider} from './src/context';

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Header title="StudyStud" />
        <Menu />
      </View>
    </AppProvider>
  );
};
const styles = StyleSheet.create({
  whole: {
    flex: 1,
  },
});
export default App;
