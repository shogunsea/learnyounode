
//   #####################################################################
//   ##                       ~~  FILTERED LS  ~~                       ##
//   #####################################################################

// Create a program that prints a list of files in a given directory, filtered by the extension of the
// files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/d
// ir/') and a file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the list to only f
// iles that end with .txt.

// The list of files should be printed to the console, one file per line. You must use asynchronous I/O
// .

// -------------------------------------------------------------------------------

// ## HINTS

// The fs.readdir() method takes a pathname as its first argument and a callback as its second. The cal
// lback signature is:

//     function callback (err, list) { /* ... */ }

// where list is an array of filename strings.

// Documentation on the fs module can be found by pointing your browser here:
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

// You may also find node's path module helpful, particularly the extname method.

// Documentation on the path module can be found by pointing your browser here:
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\path.html

// -------------------------------------------------------------------------------


//  » To print these instructions again, run: `learnyounode print`.
//  » To execute your program in a test environment, run:
//    `learnyounode run program.js`.
//  » To verify your program, run: `learnyounode verify program.js`.
//  » For help with this problem or with learnyounode, run:
//    `learnyounode help`.
//  » For a list of those who contributed to learnyounode, run:
//    `learnyounode credits`.

var fs = require('fs');
// var path = require('path');
	// console.log('first param: '+process.argv[2]);
	// console.log('second param: '+process.argv[3]);
	// var ext = '.'+process.argv[3];
	var ext = process.argv[3];
	fs.readdir(process.argv[2], function(err,file){
		for(var i = 0; i<file.length; i++){
			// if(path.extname(file[i])==ext){
			if(file[i].split('.')[1]==ext){
				// console.log('The path extname output is: ' + path.extname(file[i]))
				console.log(file[i]);
			}	
		}
	});



// Verifying "FILTERED LS"...

// ACTUAL                             EXPECTED
// ------                             --------
// "data.dat"                         "data.dat"
// "learnyounode.dat"                 "learnyounode.dat"
// "w00t.dat"                         "w00t.dat"
// "words.dat"                        "words.dat"
// ""                                 ""
// # PASS

// Your solution to FILTERED LS passed!

// Here's what the official solution is if you want to compare notes:

// -----------------------------------------------------------------


//       var fs = require('fs')
//       var path = require('path')

//       fs.readdir(process.argv[2], function (err, list) {
//         list.forEach(function (file) {
//           if (path.extname(file) === '.' + process.argv[3])
//             console.log(file)
//         })
//       })


// -----------------------------------------------------------------

// You have 8 challenges left.
// Type `learnyounode` to show the menu.

