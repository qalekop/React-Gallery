/**
 * Created by akopylov on 23.06.2015.
 */

var React = require('react');

var Address = require('./Address');
var Weather = require('./Weather');
var Button = require('./Button');
var Content = require('./Content');

var Gallery = React.createClass({

    getInitialState() {
        return null;
    }

    , render() {
        return (
            <div>
                <h1>... и о погоде:</h1>

                <div className="row"><Address address='default address'/></div>

                <div className="row">
                    <Button direction="previous"/>
                    <Content/>
                    <Button direction="next"/>
                </div>

                <div className="row"><Weather/></div>
            </div>
        );
    }
});

module.exports = Gallery;