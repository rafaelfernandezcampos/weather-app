import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class WeatherService {
  async send(cityName: string): Promise<any> {
    const response = await axios.post(API_URL + 'weather', { cityName });
    if (response.data) {
      localStorage.setItem('cityName', cityName);
    }
    return response.data;
  }
}

export default new WeatherService();
