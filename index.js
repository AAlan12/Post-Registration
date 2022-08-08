const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('test', 'root', '123456',{
    host: "localhost",
    dialect: 'mysql'
})

//Config de template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/cad', function(req,res){
    res.render('form')
})

app.listen(4001, function(){
    console.log("Server is running at url http://localhost:4001");
});