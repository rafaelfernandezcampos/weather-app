import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async weather(cityName: string) {
    try {
      // Remove special caracters and spaces name
      const cityNameNormalized = cityName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      // Get city informations based on cityName received from input
      const city = await axios.get(
        `${process.env.ACCUWEATHER_URL}locations/v1/cities/search?apikey=${process.env.ACCUWEATHER_API_KEY}&q=${cityNameNormalized}`,
      );

      /**
       * If a city information was returned from accuweather api
       * then the weather conditions can be retrieved by it locationKey
       * */
      if (city.data.length > 0) {
        // Get the city location key
        const locationKey = city.data[0].Key;

        // Get weather conditions from the city based on it's location key
        const weatherConditions = await axios.get(
          `${process.env.ACCUWEATHER_URL}currentconditions/v1/${locationKey}?apikey=${process.env.ACCUWEATHER_API_KEY}`,
        );

        const conditions = weatherConditions.data[0];
        // Return the weather conditions
        return {
          conditions,
          city: {
            name: city.data[0].LocalizedName,
            country: city.data[0].Country.LocalizedName,
            region: city.data[0].Region.LocalizedName,
          },
        };
      } else {
        throw new HttpException('City not found', 404);
      }
    } catch (err) {
      console.log(err);
      throw new HttpException(err, err.status);
    }
  }
}
