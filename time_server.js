var net = require('net');

var date = new Date();
var server = net.createServer(function(socket){
	// "2013-07-06 07:42"
	var year = date.getFullYear();
	// start from 0
	var month = date.getMonth()+1;
	if(month<10){
		month = '0' + month;
	}
	var day = date.getDate();
	if(day<10){
		day = '0' + day;
	}
	var hour = date.getHours();
	var min = date.getMinutes();
	var time = year + '-' + month + '-' + day + ' '+ hour+':'+min;
	socket.end(time+'\n');
	// socket.write('hehe');
	// socket.end();

})
// console.log(process.argv[2])
server.listen(+process.argv[2])