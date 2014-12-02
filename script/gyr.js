define(['jquery'],function($){
	function gyr(socket, drum, pin){
		console.log('gry set '+pin+'pin');
		socket.on('down', function(data){
			if(data.pin === pin){
				drum.pause();
				drum.currentTime = 0;
				drum.play();
			}
		})
	}

	return gyr;
});