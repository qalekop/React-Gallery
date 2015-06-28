/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Picture = require('./Picture')

var Content = React.createClass({

    getInitialState() {
        return {
            isMapVisible: false
        }
    },

    handleClick(){
        if (this.props.empty) return;

        $('#picture').toggleClass('hidden');
        $('#map').toggleClass('hidden');
        if (this.state.isMapVisible) {
            this.setState({isMapVisible: false});
        } else {
            this.setState({isMapVisible: true});
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
        $('#picture').removeClass('hidden');
        $('#map').addClass('hidden');
        this.setState({isMapVisible: false});
    },


    render(){
        var className = 'col-md-8 image-holder';
        if (!this.props.empty) className += ' clickable';
        return(
            <div className={className} onClick={this.props.empty ? '' : this.handleClick}>
                <p>Loading...</p>
                <Picture src={this.props.source} alt={this.props.alt}/>
                <div id="map" className="hidden"></div>
            </div>
        );
    }
});

module.exports = Content;