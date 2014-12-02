define(['jquery'],function($){
	function led(socket){
		console.log($('#led-controller'));
		var toggle = false;
		$('#ledController').on('click', function(){
			toggle = !toggle;
			console.log(toggle);
			socket.emit('led', {state: toggle});
		});
		console.log('init complate')
	}

	return led;
});