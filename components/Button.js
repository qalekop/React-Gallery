/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Button = React.createClass({
    render(){
        var dir = this.props.direction == 'next' ? 'triangle-right' : 'triangle-left';
        return(
            <div className="col-md-2"><div id={dir}></div></div>
        );
    }
});

module.exports = Button;