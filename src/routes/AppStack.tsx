import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContactListScreen } from '@screens/Contacts';
import { Colors } from '@constants';

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <SafeAreaView style={styles.container}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ContactList" component={ContactListScreen} />
    </Stack.Navigator>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.ui_grey_05,
  },
});
