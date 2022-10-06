import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Weather from './pages/weather';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/weather-info" element={<WeatherInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
