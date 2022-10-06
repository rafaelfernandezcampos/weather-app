import { Body, Controller, Post } from '@nestjs/common';
import { WeatherDTO } from './dto/weather.dto';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('/weather')
  weather(@Body() body: WeatherDTO): any {
    const { cityName } = body;

    return this.weatherService.weather(cityName);
  }
}
