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
			require(['btn', 'gyr'],function(btn, gyr){
				var drums1 = $('#drum_set1>audio');
				
				drums1.each(function(i){
					btn(socket, this, i+3);
				});

				var drums2 = $('#drum_set2>audio');

				gyr(socket, drums2[0], 2);
			});
		});
	});




	require(['jquery'], function($){
		var $target, val, sensor_id, music_src;

		$(function(){
			$('#option').on('change', function(e){
				$target = $(e.target);
				sensor_id = $target.attr('id');
				val = $target.val();
				music_src = 'music/'+val+'.mp3';


				$('[name='+sensor_id+']')[0].src = music_src;
			})
		})
	});

	require(['jquery'], function($){
		var $this, i, options;
		i = 43, options ='';
		while( i ){
			options = '<option value="'+i+'">music '+i+'</option>' + options;
			i--;
		}
		$(function(){
			$('.sensor_select').each(function(){
				this.innerHTML = options;
			})
		})
	})
})();