import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { store } from '@redux/stores/store';
import Routes from '@routes';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.appContainer}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
