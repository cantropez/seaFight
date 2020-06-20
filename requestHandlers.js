var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<a>ENTER YOUR NAME </a>'+
    '<input type="text" name="text" size="30">'+
    '<input type="submit" value="READY" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  var btn='<html> <form action="/seafield" method="post"> <input type="submit" value="READY" /> </html>'
  console.log("Request handler 'seafield' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("HEY " + querystring.parse(postData).text + " LETS PLACE THE SHIPS !?" + btn);
  response.end();
}

function seafield(response, postData){
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/loadfield" method="post">'+
    '<textarea name="field1" rows="10" cols="10"></textarea>'+
    '<input type="submit" value="SubmitAreas" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.seafield = seafield;
