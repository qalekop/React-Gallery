/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Picture = require('./Picture');
var isMapVisible;
var Content = React.createClass({

    getInitialState() {
        isMapVisible = false;
        return null;
    },

    handleClick(){
        if (this.props.empty) return;

        $('#picture').toggleClass('hidden');
        $('#map').toggleClass('hidden');
        if (isMapVisible = !isMapVisible) {
            var map = new GMaps({
                el: '#map',
                lat: this.props.lat,
                lng: this.props.lng
            });

            map.addMarker({
                lat: this.props.lat,
                lng: this.props.lng
            });
        }
    },

    componentWillReceiveProps() {
        isMapVisible = false;
    },


    render(){
        var className = 'col-md-8 image-holder';
        if (!this.props.source) {
            return (
                <div className={className}>
                    <p>Loading...</p>
                </div>
            );
        }
        if (!this.props.empty) className += ' clickable';
        return (
            <div className={className} onClick={this.props.empty ? '' : this.handleClick}>
                <Picture src={this.props.source} alt={this.props.alt}/>
                <div id="map" className="hidden"></div>
            </div>
        );
    }
});

module.exports = Content;