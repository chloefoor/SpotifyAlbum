//set up stuff, idk how this works
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = 'f6f913b7179c4c2b943855dcd832b971'; // Your client id
var client_secret = 'e488c166ed0e4fc9b7c61fad9ba1ea7a'; // Your secret
var token = '';
var app = express();

app.use(express.static(__dirname + '/public'))
  .use(cors())
  .use(cookieParser());

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    token = body.access_token;
    console.log('TOKEN:: ' + token);

  }
});
console.log('listening on 8888');
app.listen(8888);



