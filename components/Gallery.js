/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Address = require('./Address');
var Weather = require('./Weather');
var Button = require('./Button');
var Content = require('./Content');

var Gallery = React.createClass({

    getInitialState() {
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
            }
        };
    },

    componentDidMount() {
        this.nextImage('next');
    },

    nextImage(direction) {
        var self = this;
        $.get('/image/',
            {dir: direction, index: self.state.content.index},
            function(data) {
                self.setState({
                    content: {source: data.source, alt: data.alt, index: data.index, address: data.address},
                    coords: {empty: data.empty, lat: data.lat, lng: data.lng}
                });
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
                    />
                    <Button direction="next" onClick={this.nextImage}/>
                </div>

                <div className="row">
                    <Weather
                        empty={this.state.coords.empty}
                        lat={this.state.coords.lat}
                        lng={this.state.coords.lng}
                    />
                </div>
            </div>
        );
    }
});

module.exports = Gallery;