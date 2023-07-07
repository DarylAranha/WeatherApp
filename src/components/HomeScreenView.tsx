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
      <Text style={styles.label}>Enter Latitude:</Text>
      <TextInput
        style={styles.input}
        value={latitude}
        onChangeText={onLatitudeChange}
        placeholder="Latitude"
      />
      <Text style={styles.label}>Enter Longitude:</Text>
      <TextInput
        style={styles.input}
        value={longitude}
        onChangeText={onLongitudeChange}
        placeholder="Longitude"
      />
      <Button title="Get Weather" onPress={onGetWeather} />

      {weatherData ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>City: {weatherData.name}</Text>
          <Text style={styles.weatherText}>
            Temperature: {weatherData.temperature}°C
          </Text>
          <Text style={styles.weatherText}>
            Description: {weatherData.description}
          </Text>
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
  weatherContainer: {
    marginTop: 16,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreenView;
