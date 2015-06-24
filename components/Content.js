/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Content = React.createClass({

    componentDidUpdate(){
        var image = '';
        if (this.props.source) {
            image = '<img src="/assets/gallery/' + this.props.source + '" width="500" height="281" alt='
                + (this.props.alt ? ('"' + this.props.alt + '"') : '') + '/>';
            $("#picture").empty().append(image);
        }
    },

    render(){
        return(
            <div className="col-md-8 image-holder">
                <p>Loading...</p>
                <div id="picture"></div>
            </div>
        );
    }
});

module.exports = Content;