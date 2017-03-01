var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    let city = this.props.city;
    return (
      <div>
        this city is {city}
      </div>
    );
  }

});

module.exports = WeatherMessage;
