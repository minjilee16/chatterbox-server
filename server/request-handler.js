var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode = 200;


  var data = {};
  data['results'] = [];

  var sample = {
    username: 'Jono',
    message: 'Do my bidding!'
  };

  data['results'].push(sample);


  // headers
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'text/plain';

  var reqMethod = request.method;

  // if(reqMethod === 'POST') {
  // }

  // if(reqMethod === 'GET') {
  // }

  // if(reqMethod === 'OPTIONS') {
  // }
 
  // response
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.requestHandler = requestHandler;



/*
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode = 200;
  var dataStore = { };
 
  dataStore['results'] = [];
  

  // headers
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'text/plain';

  var reqMethod = request.method;

  if (reqMethod === 'POST') {
    // console.log(reqMethod);
    dataStore.results.push(request._postData); 
  }

  // if (reqMethod === 'GET') {
  //   response.end(JSON.stringify(dataStore.results));
  // }
      
  // response
  response.writeHead(statusCode, headers);
 
};

exports.requestHandler = requestHandler;

*/