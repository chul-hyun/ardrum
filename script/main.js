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
    require(['led', 'btn'],function(led, btn){
      var drums = $('#drum_set>audio');
      console.log(drums);
      drums.each(function(i){
        btn(socket, this, i+2);
      });
    });
  });
 });
})();