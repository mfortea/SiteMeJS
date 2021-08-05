// index.js

// Requires
var Twig = require("twig"),
    express = require('express'),
    app = express();
    bodyParser = require('body-parser')
    dotenv = require('dotenv').config();

// Habilitar ficheros estáticos
app.use(express.static('public'));

// Parseo a JSON del req.body
app.use(bodyParser.json());

// Variable con mock de los resultados
var mock = { sitios: [ {id:01, favorito:true, nombre:"SITIO", icono:"icono.png", direccion:"dirección", latitud: 37.899137, longitud: -4.781210  } ] };

/**** ENDPOINTS ****/

// GET "/"
app.get('/', function(req, res){
  res.render('index.twig', {
  });
});

// GET "/BUSQUEDA"
app.get('/busqueda', function(req, res){
  res.render('busqueda.html.twig', {
  });
});

// GET "/SITIOS"
app.get('/sitios', function(req, res){
  res.render('sitios.html.twig', {
  });
});

// GET "/AJUSTES"
app.get('/ajustes', function(req, res){
  res.render('ajustes.html.twig', {
  });
});
 
// POST "/BUSCARLUGARES"
app.post('/buscarLugares', function (req, res) {
  var busqueda = req.body.busqueda;
  var radio = req.body.radio;
  var lat = req.body.lat;
  var lng = req.body.lng;
  res.send(JSON.stringify(mock));
});

// GET "/OBTENERFAVORITOS"
app.get('/obtenerFavoritos', function(req, res){
  res.send(JSON.stringify(mock));
});

// DESPLIEGUE
app.listen(process.env.PUERTO);
console.log("Listening " + process.env.PUERTO); 