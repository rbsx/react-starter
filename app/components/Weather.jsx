const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
      const that = this;
      this.setState({isLoading: true})

      openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
          location,temp,
          isLoading: false
        });
      }, function(errorMessage){
        alert(errorMessage);
        that.setState({isLoading: false});
      })
  },
  render: function () {
    let {isLoading, location, temp} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
