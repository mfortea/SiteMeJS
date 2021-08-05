var Twig = require("twig"),
    express = require('express'),
    app = express();

app.use(express.static('public'));
 
app.get('/', function(req, res){
  res.render('index.twig', {
  });
});
 
app.listen(80);
console.log("Listening " + 80);