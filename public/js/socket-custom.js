var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

//Enviar información al servidor y recibir respuesta por un callback
socket.emit('enviarMensaje', {
    usuario: 'Saul',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log("Callback del server con respuesta:", resp);
});

//Escuchar información desde el servidor
socket.on('enviarMensaje', function(res) {
    console.log('Mensaje del servidor que manda un emit:', res);
});