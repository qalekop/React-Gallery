/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Address = require('./Address');
var Weather = require('./Weather');
var Button = require('./Button');
var Content = require('./Content');

var openWeatherURL = 'http://api.openweathermap.org/data/2.5/weather';
var holdOnYourHorses;

var Gallery = React.createClass({

    getInitialState() {
        holdOnYourHorses = false;
        return {
            title: '... и о погоде:',
            content: {
                source: '',
                alt: '',
                address: 'In a galaxy far far away...',
                index: -1
            },
            coords: {
                empty: true,
                lat: 0,
                lng: 0
            },
            weather: {
                empty: true,
                icon: '',
                temp: 0,
                alt: '',
                description: ''
            }
        };
    },

    componentDidMount() {
        this.nextImage('next');
    },

    nextImage(direction) {
        if (holdOnYourHorses) return;
        holdOnYourHorses = true;
        this.setState({content: {source: '', address: ''}, weather: {empty: true}});
        var self = this;
        $.get('/image/',
            {dir: direction, index: self.state.content.index},
            function(data) {
                if (!data.empty) {
                    $.get(openWeatherURL,
                        {lat: data.lat, lon: data.lng, units: 'metric', lang: 'fr_FR'},
                        function (weatherData) {
                            var _weather = weatherData.weather[0];
                            self.setState({
                                weather: {empty: false, icon: _weather.icon, temp: weatherData.main.temp, alt: _weather.main, description: _weather.description},
                                content: {source: data.source, alt: data.alt, index: data.index, address: data.address},
                                coords: {empty: data.empty, lat: data.lat, lng: data.lng}
                            });
                            holdOnYourHorses = false;
                        },
                        "json"
                    );
                } else {
                    self.setState({
                        weather: {empty: true},
                        content: {source: data.source, alt: data.alt, index: data.index, address: data.address},
                        coords: {empty: data.empty, lat: data.lat, lng: data.lng}
                    });
                    holdOnYourHorses = false;
                }
            },
            "json"
        );
    }

    , render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <div className="row"><Address address={this.state.content.address}/></div>

                <div className="row">
                    <Button direction="previous" onClick={this.nextImage}/>
                    <Content
                        source={this.state.content.source}
                        alt={this.state.content.alt}
                        empty={this.state.coords.empty}
                        lat={this.state.coords.lat}
                        lng={this.state.coords.lng}
                    />
                    <Button direction="next" onClick={this.nextImage}/>
                </div>

                <div className="row">
                    <Weather
                        empty={this.state.weather.empty}
                        icon={this.state.weather.icon}
                        temp={this.state.weather.temp}
                        alt={this.state.weather.alt}
                        description={this.state.weather.description}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Gallery;