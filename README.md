# Gallery

React.js playground. Scenario is as follows:
* get next photo file;
* read EXIF data and extract geolocation data, if any;
* reverse-geocode coords to get the name of the place;
* get weather conditions for this place;
* show place name, image and weather.

Client side is built upon react.js with bootstrap css ans Less pre-processing.

Weather Report: http://http://openweathermap.org/.

To-do:
- [x] show map on click on photo.
- [ ] make it mobile-friendly ('.col-xs-...').
- [x] ignore arrows' clicks until all asynchronous gets are over.
- [ ] play with Flux.