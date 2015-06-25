/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

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

    componentDidUpdate(){
        var image = '';
        if (this.props.source) {
            image = '<img src="/assets/gallery/' + this.props.source + '" alt='
                + (!!this.props.alt ? ('"' + this.props.alt + '"') : '') + ' id="photo"/>';
            $("#picture").empty().append(image);
        }
    },

    render(){
        console.log('Content.render');
        var className = 'col-md-8 image-holder';
        if (!this.props.empty) className += ' clickable';
        // todo odd onClick only for 'non-empty' content?
        return(
            <div className={className} onClick={this.handleClick}>
                <p>Loading...</p>
                <div id="picture"></div>
                <div id="map" className="hidden"></div>
            </div>
        );
    }
});

module.exports = Content;