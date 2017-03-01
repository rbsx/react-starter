const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      city: 'Wrecked'
    };
  },
  handleNewProps: function (city) {
      this.setState({
        city
      });
  },
  render: function () {
    let city = this.state.city;

    return (
      <div>
        <WeatherForm onNewCity={this.handleNewProps}/>
        <WeatherMessage city={city} />
      </div>
    );
  }
});

module.exports = Weather;
