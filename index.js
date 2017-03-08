// Starting point for app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');

// DB setup
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/cwil');


// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(express.static('scripts'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log("Listening on: " + port);
