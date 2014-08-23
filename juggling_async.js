//  LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
//  JUGGLING ASYNC
//  Exercise 9 of 13

// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

// -------------------------------------------------------------------------------

// ## HINTS

// Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

// You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

// Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.

// -------------------------------------------------------------------------------

//  » To print these instructions again, run: learnyounode print
//  » To execute your program in a test environment, run: learnyounode run program.js
//  » To verify your program, run: learnyounode verify program.js


var http = require('http');
var result = ['','',''];
var count = 0;
var print_result = function(data){
	// console.log('yoyooy');
	// console.log(data.toString());
	for(i in data) console.log(data[i]);
};
var get_content = function(index, url, result){
	http.get(url, function(response){
		response.setEncoding('utf8');
		response.on('data', function(data){
			result[index - 2] += data;
		});

		response.on('end', function(){
			count++;
			if(count == 3){
				print_result(result);
			}
		});
	});
};

for(var i = 2; i < process.argv.length; i++){
	get_content(i, process.argv[i], result);
}



// ────────────────────────────────────────────────────────────────────────────────

// 1.    ACTUAL:  "She'll be right dag mate he's got a massive tucker. She'll be right shag on a rock to you little ripper icy pole. As stands out like larrikin piece of piss come a cleanskin. She'll be right grundies no worries she'll be right cooee. As stands out like yabber no dramas as dry as a ford. "
// 1.  EXPECTED:  "She'll be right dag mate he's got a massive tucker. She'll be right shag on a rock to you little ripper icy pole. As stands out like larrikin piece of piss come a cleanskin. She'll be right grundies no worries she'll be right cooee. As stands out like yabber no dramas as dry as a ford. "

// 2.    ACTUAL:  "Trent from punchy bathers mate mad as a brizzie. Flat out like a schooner how as cross as a parma. Watch out for the gyno bloody mad as a gobful. Built like a top end also you little ripper boil-over. "
// 2.  EXPECTED:  "Trent from punchy bathers mate mad as a brizzie. Flat out like a schooner how as cross as a parma. Watch out for the gyno bloody mad as a gobful. Built like a top end also you little ripper boil-over. "

// 3.    ACTUAL:  "Watch out for the brizzie flamin as stands out like bloody oath!. Trent from punchy bogged mate stands out like a oldies. Lets throw a sickie no worries flat out like a vee dub. Built like a bush bash to mad as a bikkie. "
// 3.  EXPECTED:  "Watch out for the brizzie flamin as stands out like bloody oath!. Trent from punchy bogged mate stands out like a oldies. Lets throw a sickie no worries flat out like a vee dub. Built like a bush bash to mad as a bikkie. "

// 4.    ACTUAL:  ""
// 4.  EXPECTED:  ""


// ────────────────────────────────────────────────────────────────────────────────

// ✓ Submission results match expected

// # PASS

// Your solution to JUGGLING ASYNC passed!

// Here's the official solution is if you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(data)
    
//           results[index] = data.toString()
//           count++
    
//           if (count == 3) // yay! we are the last one!
//             printResults()
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++)
//       httpGet(i)

// ────────────────────────────────────────────────────────────────────────────────

// You have 3 challenges left.
// Type `learnyounode` to show the menu.

