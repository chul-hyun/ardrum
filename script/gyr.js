define(['jquery'],function($){
	function gyr(socket, gyr, pin){
		console.log('gry set '+pin+'pin');
		socket.on('down', function(data){
			if(data.pin === pin){
				gyr.pause();
				gyr.currentTime = 0;
				gyr.play();
			}
		})
	}

	return gyr;
});