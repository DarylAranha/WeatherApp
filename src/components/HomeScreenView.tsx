import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import WeatherData from '../models/WeatherData';

interface HomeScreenViewProps {
  latitude: string;
  longitude: string;
  weatherData: WeatherData | null;
  onGetWeather: () => void;
  onLatitudeChange: (text: string) => void;
  onLongitudeChange: (text: string) => void;
}

const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  latitude,
  longitude,
  weatherData,
  onGetWeather,
  onLatitudeChange,
  onLongitudeChange,
}) => {
  return (
    <View style={styles.container}>
      <Text>Enter Latitude:</Text>
      <TextInput
        style={styles.input}
        value={latitude}
        onChangeText={onLatitudeChange}
      />
      <Text>Enter Longitude:</Text>
      <TextInput
        style={styles.input}
        value={longitude}
        onChangeText={onLongitudeChange}
      />
      <Button title="Get Weather" onPress={onGetWeather} />

      {weatherData ? (
        <View>
          <Text>City: {weatherData.name}</Text>
          <Text>Temperature: {weatherData.temperature}°C</Text>
          <Text>Description: {weatherData.description}</Text>
        </View>
      ) : (
        <Text>No weather data available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
});

export default HomeScreenView;
