(function(){
	var node_modules = '../node_modules/';

	require.config({
		baseUrl: './script',
		paths: {
			'jquery'    : node_modules + 'jquery/dist/jquery.min',
			'lodash'    : node_modules + 'lodash/dist/lodash.min',
			'socketio'  : node_modules + 'socket.io-client/socket.io'   
		},
		shim: {
			'socketio': {
				exports: 'io'
			}
		}
	});

	require(['jquery', 'socketio'], function($, io){
		var socket =  io.connect('http://localhost');
		$(function(){
			require(['led', 'btn', 'gyr'],function(led, btn, gyr){
				var drums1 = $('#drum_set1>audio');
				drums1.each(function(i){
					btn(socket, this, i+2);
				});

				var drums2 = $('#drum_set2>audio');

				gyr(socket, drums2[0], 6);
			});
		});
	});
})();