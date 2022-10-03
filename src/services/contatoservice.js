const db = require('../db');

module.exports = {
    buscarTodos:() =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM contatos',(error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    buscarUm: (codigo)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM contatos WHERE codigo = ?', [codigo],(error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length>0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome,sobrenome, telefone, email)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO contatos (nome,sobrenome, telefone, email) VALUES (?,?,?,?)',
            [nome,sobrenome, telefone, email],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                    aceito(results.insertCodigo);
                }
            );
        });
    },
    alterar: (nome,sobrenome, telefone, email,codigo)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE contatos SET nome = ?, sobrenome = ?, telefone = ?, email = ? WHERE codigo = ?',
            [nome,sobrenome, telefone, email,codigo],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                    aceito(results);
                }
            );
        });
    },
    excluir:(codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM contatos WHERE codigo = ?',[codigo],(error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};