
// require do arquivo server.js que fez require do express
var app = require('./config/server');


// O (app) entre parametros é o express
/*
Sem o consign usamos como abaixo
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaForInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
*/

// o express tem o metodo listen que sobe o servidor
// esse function() é um callback da chamada
app.listen(3000, function(){
	console.log("Servidor iniciado!")	
})
