import { IsNotEmpty, IsString } from 'class-validator';

export class WeatherDTO {
  @IsNotEmpty()
  @IsString()
  cityName: string;
}
