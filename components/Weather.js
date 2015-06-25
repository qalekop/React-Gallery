/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');
var openWeatherURL = 'http://api.openweathermap.org/data/2.5/weather';
var placeHolder = 'Темна вода в облацех...';

var Weather = React.createClass({


    componentDidUpdate(){
        var $weather = $("#weather");
        $weather.empty();
        if (this.props.empty) {
            $weather.append(placeHolder);
        } else {
            var self = this;
            $.get(openWeatherURL,
                {lat: self.props.lat, lon: self.props.lng, units: 'metric', lang: 'fr_FR'},
                function (data) {
                    var _weather = data.weather[0];
                    var weather = '<img src="http://openweathermap.org/img/w/' + _weather.icon + '.png" '
                        + 'alt="' + _weather.main + '"/>' + _weather.description + '&nbsp;T=' + data.main.temp + '&deg;';
                    $weather.append(weather);
                },
                "json"
            );
        }
    },

    render() {
        return(
            <div className="col-md-8 col-md-offset-2"><h4 id="weather">{placeHolder}</h4></div>
        )
    }
});

module.exports = Weather;