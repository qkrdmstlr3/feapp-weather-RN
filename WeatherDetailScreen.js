import React, { useEffect, useState } from 'react';
import { ActiveIndicator, Image, StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

const { apiKey, baseUrl, region } = Constants.manifest.extra.openWeatherApi;

const queryUrl = (city) =>
  `${baseUrl}/weather?q=${city}&appid=${apiKey}&lang=${region}`;

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
    navigation.setOptions({ title: `${city} 날씨` });
  }, []);

  const renderTemperature = () => {
    constcelsius = state.main.temp - 273.15;
    return <Text>온도: {celsius.toFixed(1)}</Text>;
  };

  const renderWeatherCondition = () => {
    return state.weather.map(({ icon }, index) => (
      <View key={index}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            width: 72,
            height: 72,
          }}
        />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <ActiveIndicator size="large" />
      ) : (
        <View style={styles.container}>
          {renderTemperature()}
          <View style={styles.conditionContainer}>
            {renderWeatherCondition()}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8888FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conditionContainer: {
    flexDirection: 'row',
  },
});
