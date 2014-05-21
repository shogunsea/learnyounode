
var http = require('http');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	data = ''
	response.on('data', function(d){
		data+=d
	})
	response.on('end', function(){
		console.log(data.length);
		console.log(data);
	})
	response.on('error', console.error)
})