
var print_result = function(data){
	console.log('at last.')
	for(var i = 0; i<data.length; i++){
		console.log(data[i]);
	}
}

var http = require('http');
var data = ['','','']
var count = 0;
for(var i = 2; i<process.argv.length; i++){
	http.get(process.argv[i], function(response){
		console.log(process.argv[i])
		console.log(i)
		response.setEncoding('utf8');
		var result  = ''
		response.on('data', function(d){
			// console.log('inside data, index: ' + (i-2))
			result+=d
		})

		response.on('end', function(){
      // debugger
			console.log('inside end, i==: ' + (i))
			count++;
			data[i-2] = result;
			if(count==3){
				// for(var j = 0; j<3; j++){
				// 	console.log(data[j]);
				// }
				print_result(data);
			}
		})
	})
}

console.log('hehe')
console.log('process.argv.length: ' + process.argv.length)

for(var i = 0; i<process.argv.length; i++){
	console.log(process.argv[i])
}



// var http = require('http');	

// var urls = process.argv.slice(2);
// var results = [];

// // initialise results array
// for (i = 0; i < urls.length; i++) {
//   results[i] = null;
// }
// var count = 0;

// for (i = 0; i < urls.length; i++) {
//   (function(i) {
//     http.get(urls[i], function(request) {
//       var result = "";
//       request.setEncoding("utf8");
//       request.on("data", function(data) {
//       	count++;
//       	console.log('inside data, index: ' + i)

//         result += data;
//       });
//       request.on("end", function() {
//       	count++;
//       	console.log('inside end, index: ' + i)
//         results[i] = result;
//         var resultCount = 0;
//         for (j = 0; j < results.length; j++) {
//           if (results[j] != null) resultCount++;
//         }
//         if (resultCount == results.length) {
//           for (j = 0; j < results.length; j++) {
//             console.log(results[j]);
//           }
//         }
//       });
//     });
//   })(i);
// }