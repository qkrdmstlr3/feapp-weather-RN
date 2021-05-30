import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

export default function CityList(props) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // 기존 주소가 에러나서 이전 리액트 수업시간에 받은 주소 사용하였습니다.
    fetch('http://riotkr.mockable.io/weather-crawlers/cities')
      .then((response) => response.json())
      .then((cities) => {
        console.log('cities =', cities);
        setCities(cities);
      });
  }, []);

  const onPressCity = (item) => {
    console.log('onPresscity =', item);
    props.navigation.navigate('Detail', {
      city: item,
    });
  };

  const renderItem = (city) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item}
      renderItem={({ item }) => renderItem(item)}
      data={cities}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
