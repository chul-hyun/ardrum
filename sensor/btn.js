function app(socket, arduino, board, pin){
    var btn = new arduino.Button({
        board: board,
        pin: pin
    });

    socket.emit('board-ready');
    btn.on('down', function(){
        console.log(pin+' down~!!');
      socket.emit('down', {pin: pin});
  });
    console.log(pin+'pin btn init');
}

module.exports = app;