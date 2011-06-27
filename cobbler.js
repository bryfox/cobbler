var HTTP       = require('http'),
    URL        = require('url'),
    Query      = require('querystring'),
    DateHelper = require('./public/js/date_helper.js'),
    Templater  = require('./public/js/templater.js');

global.DateHelper = DateHelper;

HTTP.createServer(function (req, res) {
  var postData = "",
      tpl      = '',
      tplData  = {},
      rendered;

  switch (req.method) {

    case "POST": 
      postData = "";

      req.on("data", function (chunk) {
        postData += chunk.toString();
      }); 

      req.on("end", function () {
        postData = Query.parse(postData);
        rendered = Templater.render(postData.template, JSON.parse(postData.data));
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        res.end(rendered);
      });

      break;

    default:
      res.writeHead(405, "Method Not Allowed");
      res.end();
  }

}).listen(1337, function () {
  console.log('Server running on port 1337');
});
