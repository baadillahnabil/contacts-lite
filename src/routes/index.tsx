import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStack } from './AppStack';

export type RootStackParamList = {
  App: undefined;
};

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

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

export type { AppStackParamList } from './AppStack';

export default Routes;
