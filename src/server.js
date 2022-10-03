require('dotenv').config({path:"variaveis.env"}); //ler arquivo de variavel de sistema (.env)
const express = require("express"); //conseguir chamar o express
const cors = require("cors"); //expecificação pra trabalhar com API
const bodyParser = require('body-parser'); //modulo para converter o body para varios outros formatos

const routes = require('./routes'); //fala aonde vai ficar as rotas

const server = express(); //passa os caminhos
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes); //todos os endereços das rotas vão ter o prefixo /api

server.listen(process.env.PORT, ()=>{ //conseguir pegar dados do arquivo .env
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}` );//mostra no terminal
})