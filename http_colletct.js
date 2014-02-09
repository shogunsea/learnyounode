
//   #####################################################################
//   ##                      ~~  HTTP COLLECT  ~~                       ##
//   #####################################################################

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line
//  argument. Collect all data from the server (not just the first "data" event) and then write two lin
// es to the console (stdout).

// The first line you write should just be an integer representing the number of characters received fr
// om the server and the second line should contain the complete String of characters sent by the serve
// r.

// -------------------------------------------------------------------------------

// ## HINTS

// There are two approaches you can take to this problem:

// 1) Collect data across multiple "data" events and append the results together prior to printing the
// output. Use the "end" event to determine when the stream is finished and you can write the output.

// 2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of
//  data. Two different packages provide a useful API for solving this problem (there are likely more!)
// : bl (Buffer List) and concat-stream; take your pick!

//   [http://npm.im/bl](http://npm.im/bl)
//   [http://npm.im/concat-stream](http://npm.im/concat-stream)

// To install a Node package, use the Node Package Manager npm. Simply type:

//     $ npm install bl

// And it will download and install the latest version of the package into a subdirectory named node_mo
// dules. Any package in this subdirectory under your main program file can be loaded with the require
// syntax without being prefixed by './':

//     var bl = require('bl')

// Node will first look in the core modules and then in the node_modules directory where the package is
//  located.

// If you don't have an Internet connection, simply make a node_modules directory and copy the entire d
// irectory for the package you want to use from inside the learnyounode installation directory:

//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_modules\bl
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_modules\concat-stream

// Both bl and concat-stream can have a stream piped in to them and they will collect the data for you.
//  Once the stream has ended, a callback will be fired with the data:

//     response.pipe(bl(function (err, data) { /* ... */ }))
//     // or
//     response.pipe(concatStream(function (data) { /* ... */ }))

// Note that you will probably need to data.toString() to convert from a Buffer.

// Documentation for both of these modules has been installed along with learnyounode on your system an
// d you can read them by pointing your browser here:

//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\docs\bl.html
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\docs\concat-stream.html

// -------------------------------------------------------------------------------


//  » To print these instructions again, run: `learnyounode print`.
//  » To execute your program in a test environment, run:
//    `learnyounode run program.js`.
//  » To verify your program, run: `learnyounode verify program.js`.
//  » For help with this problem or with learnyounode, run:
//    `learnyounode help`.
//  » For a list of those who contributed to learnyounode, run:
//    `learnyounode credits`.

// var http = require('http');

// http.get(process.argv[2], function(res) {
//   var message = '';

//   res.on('data', function(chunk) {
//     message += String(chunk);
//   });

//   res.on('end', function() {
//     console.log(message.length);
//     console.log(message);
//   });

// });

// Verifying "HTTP COLLECT"...

// ACTUAL:   "87"
// EXPECTED: "87"

// ACTUAL:   "It'll be bizzo when it'll be jug. She'll be right cockie heaps as cunning as a roadie. "
// EXPECTED: "It'll be bizzo when it'll be jug. She'll be right cockie heaps as cunning as a roadie. "

// ACTUAL:   ""
// EXPECTED: ""

// # PASS

// Your solution to HTTP COLLECT passed!

// Here's what the official solution is if you want to compare notes:

// -----------------------------------------------------------------


      var http = require('http')
      var bl = require('bl')

      http.get(process.argv[2], function (response) {
      	console.log(response.pipe);
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)
          data = data.toString()
          console.log(data.length)
          console.log(data)
        }))
      })


// -----------------------------------------------------------------

// You have 5 challenges left.
// Type `learnyounode` to show the menu.

