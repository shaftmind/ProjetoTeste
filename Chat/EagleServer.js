var express = require("express"); 
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

//Conexão de varios Usuarios, para salas abertas

// usuarios = []; //array para Usuarios
// usersConnections = []; //array para usuarios conectados


server.listen(process.env.PORT || 8080); //Portas de conexão/trasporte de dados
console.log("Servidor executando...");

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html"); //Chamada dos arquivo html
	
});



io.sockets.on("connection", function(socket){
	//connection
	// usersConnections.push(socket);
	// console.log("usuarios connected: %s", usersConnections.length);
	
	// // disconnection 
	// socket.on("disconnect", function(data){
		
	// 	usuarios.splice(usuarios.indexOf(socket.username), 1); //acessando usuarios do array
		
		
	// usersConnections.splice(usersConnections.indexOf(socket),1);
	// console.log("usuarios disconnected:");
	// });
	
	//Envio de mensagens ProEagle
	socket.on("enviar nova message", function(data){ 
		// console.log(data);  mensagens digitadas pelo cliente - no console
		io.sockets.emit("new message", {msg: data});
	});
});
