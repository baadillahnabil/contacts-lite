import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Routes from '@routes';

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
