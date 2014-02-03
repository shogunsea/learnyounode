//   #####################################################################
//   ##                      ~~  MY FIRST I/O!  ~~                      ##
//   #####################################################################

// Write a program that uses a single synchronous filesystem operation to read a file and print the num
// ber of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

// -------------------------------------------------------------------------------

// ## HINTS

// To perform a filesystem operation you are going to need the fs module from the Node core library. To
//  load this kind of module, or any other "global" module, use the following incantation:

//     var fs = require('fs')

// Now you have the full fs module available in a variable named fs.

// All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, y
// ou'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containi
// ng the complete contents of the file.

// Documentation on the fs module can be found by pointing your browser here:
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

// Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be as
// cii, binary or some other format. Buffer objects can be converted to strings by simply calling the t
// oString() method on them. e.g. var str = buf.toString().

// Documentation on Buffers can be found by pointing your browser here:
//   file://c:\Users\Xiaokang\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\buffer.html

// If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScr
// ipt String can be .split() into an array of substrings and that '\n' can be used as a delimiter. Not
// e that the test file does not have a newline character ('\n') at the end of the last line, so using
// this method you'll end up with an array that has one more element than the number of newlines.

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

var file_content = fs.readFileSync(process.argv[2]).toString();

var count = file_content.split('\n').length;
console.log(count-1);




      // var fs = require('fs')

      // var contents = fs.readFileSync(process.argv[2])
      // var lines = contents.toString().split('\n').length - 1
      // console.log(lines)

      // // note you can avoid the .toString() by passing 'utf8' as the
      // // second argument to readFileSync, then you'll get a String!
      // //
      // // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1