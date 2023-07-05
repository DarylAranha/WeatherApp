import React from 'react';
import HomeScreenView from './HomeScreenView';
import HomeScreenViewModel from '../viewmodels/HomeViewModel';

function HomeScreen() {
  const viewModel = HomeScreenViewModel();

  return (
    <HomeScreenView
      latitude={viewModel.latitude}
      longitude={viewModel.longitude}
      weatherData={viewModel.weatherData}
      onGetWeather={viewModel.getWeather}
      onLatitudeChange={viewModel.handleLatitudeChange}
      onLongitudeChange={viewModel.handleLongitudeChange}
    />
  );
}

export default HomeScreen;
