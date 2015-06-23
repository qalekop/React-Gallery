/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Address = React.createClass({
    render(){
        return(
            <div className="col-md-8 col-md-offset-2"><h2>{this.props.address}</h2></div>
        )
    }
});

module.exports = Address;