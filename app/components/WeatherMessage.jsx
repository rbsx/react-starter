const React = require('react');


const WeatherMessage = ({location, temp}) => {

  function tempBG(tempAsString) {
    let t = +tempAsString;
    console.log(tempAsString, t);
    if (t < -10) {
        return 'ice';
    } else if ((t > -10) && (t < 0)) {
        return 'cold';
    } else if ((t > 0) && (t < 10)) {
        return 'middle';
    } else if ((t > 10) && (t < 20)) {
        return 'warm';
    } else if (t > 20) {
        return 'hot';
    }
  }

  let bgColor = tempBG(temp),
      tempClass = `text-center ${bgColor}`;

  console.log(bgColor, temp);

  return (
    <div className="resulted-message">
      <div className={tempClass}>
        This is {temp} C* at <span className="capitalize">{location.toLowerCase()}</span>
      </div>
    </div>
  );
}

module.exports = WeatherMessage;
