var https = require('https');
var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  console.log("response",response);
}

console.log("I'm about to make the request!");



console.log("I've made the request!");
https.request(options, callback).end();
