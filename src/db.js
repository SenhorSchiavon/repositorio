const mysql = require('mysql');

const connection = mysql.createConnection({
    host:process.env.DB_HOST, //puxa as variaveis da pasta variaveis.env
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error; //se erro, mostra erro
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`) //se nao
});

module.exports = connection