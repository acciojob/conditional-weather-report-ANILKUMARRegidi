import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Inline styling for temperature display color based on threshold value
  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <h2>Current Temperature: <span style={temperatureStyle}>{temperature}°C</span></h2>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
