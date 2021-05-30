import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

function CounterButton(props) {
  const [state, setState] = useState({
    counter: isNaN(props.counter) ? -1 : props.counter,
  });

  const clickHandler = () => {
    setState({
      counter: state.counter + 1,
    });
  };

  return (
    <View style={styles.container}>
      <Text>{state.counter}</Text>
      <Button title={'click me!'} onPress={clickHandler} />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <CounterButton />
      <CounterButton counter={0} />
      <CounterButton counter={1} />
      <CounterButton counter={2} />
      <CounterButton counter={3} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
