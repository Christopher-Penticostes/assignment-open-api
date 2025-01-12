"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let WeatherService = class WeatherService {
    constructor() {
        this.apiKey = 'b3c2275a3a5745ccad761854251201';
        this.apiUrl = 'http://api.weatherapi.com/v1/current.json';
    }
    async getTemperature(city) {
        try {
            const response = await axios_1.default.get(this.apiUrl, {
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
        }
        catch (error) {
            throw new common_1.HttpException(error.response?.data?.error?.message || 'Unable to fetch weather data', error.response?.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)()
], WeatherService);
//# sourceMappingURL=weather.service.js.map