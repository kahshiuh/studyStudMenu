import React, {useEffect} from 'react';
import {AppProvider} from './context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EditDeckScreen from './screens/EditDeckScreen';

const Setup = () => {
  const Stack = createStackNavigator();
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

export default Setup;
