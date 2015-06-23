/**
 * Created by akopylov on 23.06.2015.
 */

var express = require('express')
    , fs = require('fs')
    , parser = require('exif-parser')
    , gm = require('googlemaps')
    , async = require('async')
    ;

var app = express();
app.use(express.static(__dirname + '/public'));

var images = [];
var fnPrefix = __dirname + '/public/assets/gallery';
var files = fs.readdirSync(fnPrefix);
var file
    , exif
    , coords;

files.forEach(function(file, i) {
    exif = parser.create(fs.readFileSync(fnPrefix + '/' + file)).parse();
    var image = {'name': file, 'endroit': 'Quelque part'};
    images[i] = image;
    if (exif.tags.GPSVersionID) {
        image.waitForName = true;
        image.latitude = exif.tags.GPSLatitude; image.longitude = exif.tags.GPSLongitude;
    }
});

async.each(images
    , function(item, callback) {
        if (item.waitForName) {
            gm.reverseGeocode(item.latitude + ',' + item.longitude, function(err, data){item.endroit = data.results[2].formatted_address; callback();});
        } else {
            callback();
        }
    }
    , function(err) {
        app.listen(process.env.PORT || 3000, function() {console.log('listening...');});
    }
);

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get("/image/:dir", function(req, res) {
    var dir = req.params.dir;
    console.log('*** dir=' + dir);
});