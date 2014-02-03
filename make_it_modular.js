
//   #####################################################################
//   ##                     ~~  MAKE IT MODULAR  ~~                     ##
//   #####################################################################

// This problem is the same as the previous but introduces the concept of modules. You will need to cre
// ate two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the
// files. The first argument is the directory name and the second argument is the extension filter. Pri
// nt the list of files (one file per line) to the console. You must use asynchronous I/O.

// You must write a module file to do most of the work. The module must export a single function that t
// akes three arguments: the directory name, the filename extension string and a callback function. The
//  filename extension argument must be the same as was passed to your program. i.e. don't turn it in t
// o a RegExp or prefix with "." or do anything else but pass it to your module where you can do what y
// ou need to make your filter work.

// The callback function must be called using the idiomatic node(err, data) convention. This convention
//  stipulates that unless there's an error, the first argument passed to the callback will be null, an
// d the second will be your data. In this case the data will be your filtered list of files, as an Arr
// ay. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with
// the error, and only the error, as the first argument.

// You must not print directly to the console from your module file, only from your original program.

// In the case of an error bubbling up to your original program file, simply check for it and print an
// informative message to the console.

// -------------------------------------------------------------------------------

// ## HINTS

// Create a new module by creating a new file that just contains your directory reading and filtering f
// unction. To define a single function export you assign your function to the module.exports object, o
// verwriting what is already there:

//     module.exports = function (args) { /* ... */ }

// Or you can use a named function and assign the name.

// To use your new module in your original program file, use the require() call in the same way that yo
// u require('fs') to load the fs module. The only difference is that for local modules must be prefixe
// d with './'. So, if your file is named mymodule.js then:

//     var mymodule = require('./mymodule.js')

// The '.js' is optional here and you will often see it omitted.

// You now have the module.exports object in your module assigned to the mymodule variable. Since you a
// re exporting a single function, mymodule is a function you can call!

// Also keep in mind that it is idiomatic to check for errors and do early-returns within callback func
// tions:

//     function bar (callback) {
//       foo(function (err, data) {
//         if (err)
//           return callback(err) // early return

//         // ... no error, continue doing cool things with `data`

//         // all went well, call callback with `null` for the error argument

//         callback(null, data)
//       })
//     }

// -------------------------------------------------------------------------------


//  » To print these instructions again, run: `learnyounode print`.
//  » To execute your program in a test environment, run:
//    `learnyounode run program.js`.
//  » To verify your program, run: `learnyounode verify program.js`.
//  » For help with this problem or with learnyounode, run:
//    `learnyounode help`.
//  » For a list of those who contributed to learnyounode, run:
//    `learnyounode credits`.


var module = require('./module.js');
var mymodule = module(process.argv[2],process.argv[3], function(err,data){
  if(err){
    return console.error(err);
  }

  data.forEach(function(item){
    console.log(item);
  })
});



// Verifying "MAKE IT MODULAR"...

// ACTUAL                             EXPECTED
// ------                             --------
// "CHANGELOG.md"                     "CHANGELOG.md"
// "LICENCE.md"                       "LICENCE.md"
// "README.md"                        "README.md"
// ""                                 ""
// # PASS

// Your solution to MAKE IT MODULAR passed!

// Here's what the official solution is if you want to compare notes:

// -----------------------------------------------------------------

// solution.js:


//       var filterFn = require('./solution_filter.js')
//       var dir = process.argv[2]
//       var filterStr = process.argv[3]

//       filterFn(dir, filterStr, function (err, list) {
//         if (err)
//           return console.error('There was an error:', err)

//         list.forEach(function (file) {
//           console.log(file)
//         })
//       })


// -----------------------------------------------------------------

// solution_filter.js:


//       var fs = require('fs')
//       var path = require('path')

//       module.exports = function (dir, filterStr, callback) {

//         fs.readdir(dir, function (err, list) {
//           if (err)
//             return callback(err)

//           list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//           })

//           callback(null, list)
//         })
//       }


// -----------------------------------------------------------------

// You have 7 challenges left.
// Type `learnyounode` to show the menu.

