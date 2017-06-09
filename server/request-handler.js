var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

var send = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end( JSON.stringify(data) );
};

var objectId = 1;
var messages = [
  {
    text: 'Hello World',
    username: 'fred',
    objectId: objectId
  }
];

var requestHandler = function(request, response) {

  var reqMethod = request.method;

  // GET
  if (reqMethod === 'GET') {
    send(response, {results: messages});
  }

  // POST
  if (reqMethod === 'POST') {
    var string = '';
    request.on('data', function(chunk) {
      string += chunk;
    });
    request.on('end', function() {

      console.log("STRING", string);

      var obj = JSON.parse(string);

      console.log("OBJ", obj);

      obj.objectId = ++objectId;

      messages.push(obj);

      send(response, {objectId: obj.objectId});
    });
  }

  // OPTIONS
  if (reqMethod === 'OPTIONS') {
    send(response, 'Hi');
  }

};

exports.requestHandler = requestHandler;
