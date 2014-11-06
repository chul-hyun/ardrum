function app(socket, arduino, board, pin){
	var led = new arduino.Led({
		board: board,
		pin: pin
	});

	socket.emit('board-ready');
	socket.on('led', function (data) {
		console.log('led '+data);
		if(data.state){
			led.on();
		}else{
			led.off();
		}
	});
	console.log(pin+' pin led init');
}

module.exports = app;