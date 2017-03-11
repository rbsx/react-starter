const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
      const that = this;

      this.setState({
        isLoading: true,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
      })

      openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
          location, temp,
          isLoading: false
        });
      }, function (error) {
        that.setState({
          isLoading: false,
          errorMessage: error.message
        });
      });
  },
  componentDidMount: function() {
    let location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    let location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    let {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <div className="text-center">Fetching weather...</div>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
