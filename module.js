

var fs = require('fs');
var path = require('path');
// console.log('first param: '+process.argv[2]);
// console.log('second param: '+process.argv[3]);

module.exports = function(file_path, extension, callback){
	// console.log(file_path);
	// console.log(ext);
	var ext = '.'+ extension;
	var result = [];
	fs.readdir(file_path, function(err,files){
		if(err){
			return callback(err);
		}else{
			files.forEach(function(item){
				if(path.extname(item)==ext){
					result.push(item);
				}
			})

			callback(null, result);
		}

		
	});
};




