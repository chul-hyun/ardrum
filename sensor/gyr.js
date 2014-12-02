function app(socket, arduino, board, pin){
	var gyr = new arduino.Gyroscope({
		board: board,
		pin: pin
	});
	var change_time = getNow();
	var delay = 200;

	socket.emit('board-ready');

	var now;
	gyr.on('down', function(){
		now = getNow();
		if( change_time + delay <= now ){
			change_time = now;
			socket.emit('down', {pin: pin});
			console.log('gyr down~!!');
		}
	});
	console.log(pin+'pin gyr init');
}

function getNow(){
	return (new Date()).getTime();
}

module.exports = app;