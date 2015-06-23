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
        return {
            title: '... и о погоде:'
        };
    },

    componentDidMount() {
        // todo fetch initial state
    },

    nextImage(direction) {
        console.log('*** nextImage: ' + direction);
        //todo: get next/prev image from server, i.e. get new img src, replace it etc
        $.get('/image/' + direction,
            function(data) {
                console.log(data);
            }
        );
    }

    , render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <div className="row"><Address address='default address'/></div>

                <div className="row">
                    <Button direction="previous" onClick={this.nextImage}/>
                    <Content/>
                    <Button direction="next" onClick={this.nextImage}/>
                </div>

                <div className="row"><Weather/></div>
            </div>
        );
    }
});

module.exports = Gallery;