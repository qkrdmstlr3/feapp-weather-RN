import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '32d9c849094b5dd5ce6a7e17fe2817fc';
const queryUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

export default function WeatherDetailScreen({
  route: {
    params: { city },
  },
  navigation,
}) {
  const [state, setState] = useState({ isLoading: true });

  useEffect(() => {
    fetch(queryUrl(city))
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        setState({
          ...info,
          isLoading: false,
        });
      });
    navigation.setOptions({ title: `Weather Information: ${city}` });
  }, []);

  if (state.isLoading) {
    return (
      <View style={styles.container}>
        <Text>데이터를 불러오는 중입니다.</Text>
      </View>
    );
  }

  let celsius = state.main.temp - 273.15;
  return (
    <View style={styles.container}>
      <Text>온도: {celsius.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
