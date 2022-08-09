const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post =  require('./models/Post')



//Config de template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        console.log(posts)
        res.render('home', {posts: posts})    
    })
})

app.get('/cad', function(req,res){
    res.render('form')
})

app.post('/add', function(req,res){
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("there was an error: "+erro)
    })
})

app.listen(4001, function(){
    console.log("Server is running at url http://localhost:4001");
});