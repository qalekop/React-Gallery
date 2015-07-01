/**
 * Created by alexeikopylov on 27.06.15.
 */

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Picture = React.createClass({

    propTypes: {
        src: React.PropTypes.string.isRequired
    },

    render() {
        var src = '/assets/gallery/' + this.props.src;
        return (
            <div id="picture">
                <ReactCSSTransitionGroup transitionName="fade" transitionLeave={false}>
                    <img src={src}
                         alt={!!this.props.alt ? this.props.alt : ''}
                         id="photo"
                         key={this.props.src}
                    />
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = Picture;