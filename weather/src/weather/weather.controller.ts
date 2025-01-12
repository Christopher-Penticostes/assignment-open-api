import { Controller, Post, Body } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('temperature')
  async getTemperature(@Body() body: { city: string }) {
    const { city } = body;
    if (!city) {
      return { error: 'City is required in the request body' };
    }
    return this.weatherService.getTemperature(city);
  }
}
