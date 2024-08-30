import React from 'react';
import type { JSX } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
