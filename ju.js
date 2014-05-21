
var data = ['', '',''];


var print_result = function(data){
	for(var i = 0; i<data.length; i++){
		console.log(data[i]);
	}
}

var http = require('http');
var count = 0;
var get = function(index, url){
	http.get(url, function(response){
		response.setEncoding('utf8');
		var result = '';
		response.on('data', function(d){
			result+=d;
		})

		response.on('end', function(){
			count++;
			data[index] = result;

			if(count==3){
				print_result(data);
			}
		})
	})
}

for(var j = 2; j<process.argv.length; j++){
	get(j-2, process.argv[j]);
}
