/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Button = React.createClass({

    handleClick(){
        this.props.onClick(this.props.direction);
    },


    render(){
        var cn = 'triangle-common triangle-' + (this.props.direction == 'next' ? 'right' : 'left') + ' clickable';
        return(
            <div className="col-md-2"><div className={cn} onClick={this.handleClick}></div></div>
        );
    }
});

module.exports = Button;