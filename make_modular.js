
var module = require('./fs_lib.js');

var callback = function(err, data){
	if(err){
		return console.log(err);
	}

	data.forEach(function(file){
		console.log(file)
	})

	// for(var i = 0; i<data.length; i++){
	// 	console.log(data[i]);
	// }
}

module(process.argv[2], process.argv[3], callback);