/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');
var placeHolder = 'Темна вода в облацех...';

var Weather = React.createClass({

    render() {
        if (!this.props.empty) {
            var iconUrl = 'http://openweathermap.org/img/w/' + this.props.icon + '.png';
            return (
                <div className="col-md-8 col-md-offset-2"><h4 id="weather">
                    <img src={iconUrl} alt={this.props.alt}/>{this.props.description}&nbsp;T={this.props.temp}&deg;
                </h4></div>
            )
        } else {
            return (
                <div className="col-md-8 col-md-offset-2"/>
            )
        }

    }
});

module.exports = Weather;