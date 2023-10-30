import axios from 'axios';
import * as process from './process'

class Coordinates {
    constructor(public lat:number, public lon:number) {}
};

interface call {
    forecastGridData: any,
    hourly: any,
    daily: any,
    location: {
        city: any,
        state: any
    };
};  

interface Data {
    chart: any,
    current: any,
    twelveHour: any
}

/* Call                                             
******************************************/

const fetchData = async (url: string) => {
    if (url) {
        const response = await axios.get(url)
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
            .then(response => response);
        return response ? response.data : null;
    }
};

/* Passed Data                                            
******************************************/

const dataObject = (forecast: any, hourly: any, daily: any, response: any) => {
    try {
        const data: call = {
            forecastGridData: forecast,
            hourly: hourly,
            daily: daily,
            location: {
                city: response['properties']['relativeLocation']['properties']['city'],
                state: response['properties']['relativeLocation']['properties']['state']
            }
        };
        
        const processedData: Data = {
            chart: process.chartData (data),
            current: process.currentData (data),
            twelveHour: process.twelveHourData (data),
        };
        
        return processedData
    } catch (error) {
        console.error('dataObject(): ' + error)
        return null;
    };
}; 

/* Final Calls                                             
******************************************/

const getForecastGridData = async (response: any) => {
    const resp = await fetchData(response[`properties`]['forecastGridData'])
        return resp ? resp['properties'] : null;
};
        
const getHourly = async (response: any) => {
    const resp = await fetchData(response[`properties`][`forecastHourly`])
    return resp ? resp['properties']['periods'] : null;
};
        
const getDaily = async (response: any) => {
    const resp = await fetchData(response[`properties`][`forecast`])
        return resp ? resp['properties']['periods'] : null;
};

/* First Call                                         
******************************************/

const getData = async (location: Coordinates | null): Promise<any> => {
    try {

        if (location) {
            const latitude = location?.lat
            const longitude = location?.lon

            const url = `https://api.weather.gov/points/${latitude},${longitude}`
            const response = await fetchData(url);
            if (!response) {
                return null;
            } else {

                const forecast = await getForecastGridData(response);
                const hourly = await getHourly(response);
                const daily = await getDaily(response);

                return (
                    (response && forecast && hourly && daily)
                        ? dataObject(forecast, hourly, daily, response)
                        : null);
            };
        };
    } catch (error) {
        console.error(error);
        return null;
    };
};





export default getData;