import { modifyHours, average, check } from '../util';

interface ForecastData {
    dayHigh: number;
    dayLow: number;
    name: string;
    timeStamp: number;
    isDayTime: boolean;
    hourOfDay: any;
    shortDesc: string;
    longDesc: string;
    precipitation: number;
    humidity: number;
    windSpeed: number;
};

interface CurrentData  {
    temp: number;
    precipitation: number;
    humidity: number;
    temperatureUnit: string;
    dayHigh: number;
    dayLow: number;
    windSpeed: number;
    description: string;
    longDescription: string;
    isDayTime: boolean;
    windDirection: string;
    city: string;
    state: string;
};

interface Info {
    title: string,
    data: number[]
};

interface Chart {
    temp: Info;
    precipitation: Info
    humidity: Info;
};

/* Current                                            
******************************************/

const currentData  = (data: any): CurrentData  | null => {
    try {
        const forecast = data.forecastGridData;
        const hourly = data.hourly;
        const one: any = hourly[0]
        const two: any = hourly[1]
            return{
                temp: average(one['temperature'], two['temperature']),
                precipitation: average(one['probabilityOfPrecipitation'].value, two['probabilityOfPrecipitation'].value),
                humidity: average(one['relativeHumidity']['value'], two['relativeHumidity'].value),
                temperatureUnit: one['temperatureUnit'],
                dayHigh: forecast['maxTemperature']['values'][0].value,
                dayLow: forecast['minTemperature']['values'][0].value,
                windSpeed: one['windSpeed'],
                description: one['shortForecast'],
                longDescription: one['detailedForecast'],
                isDayTime: one['isDaytime'],
                windDirection: one['windDirection'],
                city: data.location['city'],
                state: data.location['state'],
            }
    } catch (error) {
        console.log('process.ts current(): ',error);
        return null;
    };
};

/* Chart                                             
******************************************/

const chartData = ((data: any) => {
    try {
        const forecast = (data: any) => {
            class Forecast {
                name: string;
                timeStamp: number;
                isDayTime: boolean;
                time: any;
                shortDesc: string;
                longDesc: string;
                temp: number;
                precipitation: number;
                humidity: number;
                windSpeed: number;
                constructor(data: any) {
                    this.name = data['name'];
                    this.timeStamp = data['startTime'];
                    this.isDayTime = data['isDaytime'];
                    this.time = modifyHours(new Date(data['startTime']).getHours())
                    this.shortDesc = data[`shortForecast`];
                    this.longDesc = data[`detailedForecast`];
                    this.temp = data['temperature'];
                    this.precipitation = check(data['probabilityOfPrecipitation'].value);
                    this.humidity = check(data['relativeHumidity'].value);
                    this.windSpeed = data['windSpeed'];
                };
            };
            return new Forecast(data)
        };
        const hourly: any = data.hourly
        let time: number[] = [];
        let chart: Chart = {
            temp: {
                title: 'Temperature',
                data: []
            },
            precipitation: {
                title: 'Chance of Precipitation',
                data: []
            },
            humidity: {
                title: 'Humidity',
                data: []
            }
        };
        let n: number = 0
        while (n < 13) {
            let info = hourly[n]
            let x: any = forecast(info);
            time.push(x.time);
            chart.temp.data.push(x.temp);
            chart.precipitation.data.push(x.precipitation);
            chart.humidity.data.push(x.humidity);
            n++
        }
        return {
            time: time,
            chart: chart
        };
    } catch (error: any) {
        console.error(error);
    };
});

/* Twelve Hour & Forecast                                             
******************************************/
const twelveHourData = (data: any) => {
    try {
        const forecast = (data: any, n: number) => {
            try {
                const forecast = data.forecastGridData;
                const daily = data.daily[n]
                return {
                    name: daily['name'],
                    timeStamp: daily['startTime'],
                    temp: daily['temperature'],
                    dayHigh: check(forecast['maxTemperature']['values'][n]?forecast['maxTemperature']['values'][n].value:null),
                    dayLow: check(forecast['minTemperature']['values'][n]?forecast['minTemperature']['values'][n].value:null),
                    isDayTime: daily['isDaytime'],
                    hourOfDay: modifyHours(new Date(data.daily[n]['startTime']).getHours()),
                    shortDesc: daily[`shortForecast`],
                    longDesc: daily[`detailedForecast`],
                    precipitation: check(daily['probabilityOfPrecipitation'].value),
                    humidity: check(daily['relativeHumidity'].value),
                    windSpeed: check(daily['windSpeed']),
                }
            } catch (error) {
                console.error(error);
            };
        };
        if (data.daily && data.forecastGridData) {
            let list: ForecastData[] = [];
            let n: number = 1
            while (n <= 10) {
                let x: any= forecast(data, n)
                list.push(x);
                n++
            }
            return list
        };
    } catch (error: any) {
        console.error('process.ts twelveHour(): ' + error);
        return null;
    };
};

export { twelveHourData, chartData, currentData };
