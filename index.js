const request = require('request');
const argv = require('yargs').argv;

let apiKey = '193244cb43a2a85072885e430c902cef';
let city = argv.c || 'singapore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees Celsius in ${weather.name}!`;
    console.log(message);
  }
});
