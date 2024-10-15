import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather`, {
        params: { lat, lon }
      });
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch weather data.');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.location.name}</h3>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;
