/**
 * Created by alexeikopylov on 27.06.15.
 */

var React = require('react');

var Picture = React.createClass({

     render() {
         if (!this.props.src) return null;

         var src = '/assets/gallery/' + this.props.src;
        return(
            <div id="picture">
                <img src={src}
                     alt={!!this.props.alt ? this.props.alt : ''}
                     id="photo"/>
            </div>
        );
    }
});

module.exports = Picture;