import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContactListScreen, ContactDetailScreen } from '@screens/Contacts';
import { COLORS } from '@constants';

export type AppStackParamList = {
  ContactList: undefined;
  ContactDetail: { recordId: string };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => (
  <SafeAreaView style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.ui_grey_05,
  },
});
