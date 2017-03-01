var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    let name = this.refs.city.value;

    if (name) {
      this.refs.city.value = '';
      this.props.onNewCity(name);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city"/>
          <button>Get weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
