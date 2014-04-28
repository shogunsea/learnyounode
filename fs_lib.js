// module for ls filter.

var fs = require('fs');

module.exports = function(file_path, ext, callback){
	// var fs_callback = function(err, data){
	// 	if(err){
	// 		return callback(err);
	// 	}

	// 	var files = [];

	// 	for(var i = 0; i<data.length; i++){
	// 		if(data[i].split('.')[1]==ext){
	// 			files.push(data[i]);
	// 		}
	// 	}

	// 	return callback(err, files);
	// }

	fs.readdir(file_path, function(err, data){
		if(err){
			return callback(err);
		}

		var files = [];

		for(var i = 0; i<data.length; i++){
			if(data[i].split('.')[1]==ext){
				files.push(data[i]);
			}
		}

		return callback(err, files);
	});
}