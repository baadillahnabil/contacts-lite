import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStack } from './AppStack';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="App" component={AppStack} />
        {/* This could be more than one root screens such as auth screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
