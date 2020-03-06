const { io } = require('../server');


io.on('connection', (client) => {

    console.log('usuario conectado');

    //Valida cuando el usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    
    //Envia mensaje al cliente tipo "enviarMensaje"
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Escuchar el cliente y ejecutar el callback en base a lo que manda el usuario
    client.on('enviarMensaje', (data, callback) => {
       
        console.log("Usuario:", data);

        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario) {
        //     callback({
        //         mensaje: "Todos Oks!"
        //     });
        // } else {
        //     callback({
        //         mensaje: "Todo Mal :("
        //     });
        // }
    });

});