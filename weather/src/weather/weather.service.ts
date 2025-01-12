import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'b3c2275a3a5745ccad761854251201'; // Replace with your WeatherAPI key
  private readonly apiUrl = 'http://api.weatherapi.com/v1/current.json';

  async getTemperature(city: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          key: this.apiKey,
          q: city,
        },
      });

      const { temp_c, temp_f } = response.data.current;
      return {
        city,
        temperature: {
          celsius: temp_c,
          fahrenheit: temp_f,
        },
      };
    } catch (error) {
      throw new HttpException(
        error.response?.data?.error?.message || 'Unable to fetch weather data',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
