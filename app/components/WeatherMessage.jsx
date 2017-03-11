const React = require('react');


const WeatherMessage = ({location, temp}) => {
  return (
    <div className="text-center">
      this city is {location} and temperature {temp}
    </div>
  );
}

module.exports = WeatherMessage;
