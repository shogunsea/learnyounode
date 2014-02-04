
//   #####################################################################
//   ##                       ~~  HTTP CLIENT  ~~                       ##
//   #####################################################################

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line
//  argument. Write the String contents of each "data" event from the response to a new line on the con
// sole (stdout).

// -------------------------------------------------------------------------------

// ## HINTS

// For this exercise you will need to use the http core module.

// Documentation on the http module can be found by pointing your browser here:
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html

// The http.get() method is a shortcut for simple GET requests, use it to simplify your solution. The f
// irst argument to http.get() can be the URL you want to GET, provide a callback as the second argumen
// t.

// Unlike other callback functions, this one has the signature:

//     function callback (response) { /* ... */ }

// Where the response object is a Node Stream object. You can treat Node Streams as objects that emit e
// vents, the three events that are of most interest are: "data", "error" and "end". You listen to an e
// vent like so:

//     stream.on("data", function (data) { /* ... */ })

// The "data" is emitted when a chunk of data is available and can be processed. The size of the chunk
// depends upon the underlying data source.

// The response object / Stream that you get from http.get() also has a setEncoding() method. If you ca
// ll this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer
//  objects which you have to explicitly convert to Strings.

// -------------------------------------------------------------------------------


//  » To print these instructions again, run: `learnyounode print`.
//  » To execute your program in a test environment, run:
//    `learnyounode run program.js`.
//  » To verify your program, run: `learnyounode verify program.js`.
//  » For help with this problem or with learnyounode, run:
//    `learnyounode help`.
//  » For a list of those who contributed to learnyounode, run:
//    `learnyounode credits`.



var http = require('http');	

http.get(process.argv[2], function(response){
	 response.setEncoding("utf8");
	response.on('data', console.log);
	response.on('error', console.error);
})


// Verifying "HTTP CLIENT"...

// ACTUAL                             EXPECTED
// ------                             --------
// "Deadset"                          "Deadset"
// "Bush telly"                       "Bush telly"
// "Flanno"                           "Flanno"
// "Smoko"                            "Smoko"
// "Mate's rate"                      "Mate's rate"
// "Ciggies"                          "Ciggies"
// "Coldie"                           "Coldie"
// "Fairy floss"                      "Fairy floss"
// "Dunny"                            "Dunny"
// "Parma"                            "Parma"
// ""                                 ""
// # PASS

// Your solution to HTTP CLIENT passed!

// Here's what the official solution is if you want to compare notes:

// -----------------------------------------------------------------


//       var http = require('http')

//       http.get(process.argv[2], function (response) {
//         response.setEncoding('utf8')
//         response.on('data', console.log)
//         response.on('error', console.error)
//       })


// -----------------------------------------------------------------

// You have 6 challenges left.
// Type `learnyounode` to show the menu.

