/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Address = React.createClass({
    render(){
        return (
            <div className="col-md-8 col-md-offset-2">
                <ReactCSSTransitionGroup transitionName="fade" transitionLeave={false}>
                    <h4 key={this.props.address}>{this.props.address}</h4>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Address;