/**
 * Created by hanso on 3/20/2018.
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  sequelize = require('sequelize'),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  path = require('path'),
  cors = require('cors');

// App related modules.
var hookJWTStrategy = require('./server/passportStrategy');

// Initializations.
var app = express();

// Parse as urlencoded and json |Hook up Passport..|Hook up the HTTP logger.|Hook the passport JWT strategy.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(passport.initialize());

hookJWTStrategy(passport);

// Set the static files location.
// Serve static files
app.use(express.static(path.join(__dirname, '/dist/')));
app.use('/api', require('./server/routes/api')(passport));// Bundle API routes.

// Catch all route.
// Return other routes to Angular index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Start the server.
app.listen('8080', function () {
  console.log('Magic happens at http://localhost:8080');
});
