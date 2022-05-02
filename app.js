var express     = require('express'),
    app         = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing')
});

app.get('/portfolio', function(req, res){
    res.render('index')
});

app.use(express.static(__dirname + "/public"));

app.listen(4000, function(){
    console.log('Running your portfolio app')
})