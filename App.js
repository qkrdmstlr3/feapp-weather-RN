import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1</Text>
      <Text style={[styles.text, styles.text2]}>2</Text>
      <Text style={styles.text}>3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2: {
    flex: 2,
  },
});
