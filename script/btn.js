define(['jquery'],function($){
	function btn(socket, drum, pin){
		console.log('drum set '+pin+'pin');
		socket.on('down', function(data){
			console.log(data);
			if(data.pin === pin){
				drum.pause();
				drum.currentTime = 0;
				drum.play();
			}
		})
	}

	return btn;
});