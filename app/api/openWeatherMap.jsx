const axios = require('axios');
const appid = '418113c3901934684d1c74ff97a794e3';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric`;


module.exports = {
  getTemp: function(location){
    const encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(res){
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message)
        } else {
          return res.data.main.temp;
        }
      },
      function(res){
        throw new Error('Unable to fetch weather for that location.');
      }
    );
  }
};
