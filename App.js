/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';
import Header from './src/Header';
import Menu from './src/Menu';
import EditMenu from './src/EditMenu';
import {AppProvider, useGlobalContext} from './src/context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {HomeScreen} from './src/screens/HomeScreen';

const Stack = createStackNavigator();

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
function EditDeckScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('StudyStud');
  };
  return (
    <View>
      <Pressable style={styles.temp} onPress={onPressHandler}></Pressable>
      <EditMenu />
    </View>
  );
}

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StudyStud" component={HomeScreen} />
          <Stack.Screen name="EditDeckScreen" component={EditDeckScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
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
export default App;
