require('babel-register')({
  presets: ['react']
})
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./src/js/client.js');

app.get('/', function(req, res){
  var html = ReactDOMServer.renderToString(React.createElement(Component));
  res.send(html);
});

app.listen(3000);
