import { WeatherService } from './weather.service';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    getTemperature(body: {
        city: string;
    }): Promise<any>;
}
