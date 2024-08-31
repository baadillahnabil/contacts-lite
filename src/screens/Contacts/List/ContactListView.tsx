import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

export type ViewProps = {};

const ContactListView = ({}: ViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Contacts</Text>
    </SafeAreaView>
  );
};

export default ContactListView;
