var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    let location = this.refs.location.value;

    if (location) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city" ref="location"/>
          <button className="button hollow expanded">Get weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
