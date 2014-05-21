
var http = require('http');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	// console.log is a function, here passed in as the callback function.
	response.on('data', console.log);
	response.on('error', console.log);
})