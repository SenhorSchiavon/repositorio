const contatoservice = require('../services/contatoservice');

module.exports = {
    buscarTodos : async (req,res)=>{ //requisição ao banco de dados
        let json = {error:'', result:[]};

        let contato = await contatoservice.buscarTodos();

        for(let i in contato){
            json.result.push({
                codigo: contato[i].codigo,
                descricao: contato[i].modelo
            });
        }
        res.json(json);
    },
    buscarUm: async(req,res)=>{
        let json = {error:'', result:{}};
        let codigo = req.params.codigo;
        let contato = await contatoservice.buscarUm(codigo);

        if(contato){
            json.result = contato;

        }
        res.json(json)
    },
    inserir: async(req,res)=>{
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;
        let telefone = req.body.telefone;
        let email = req.body.email;
       

        if(nome && sobrenome && telefone && email){
            let contatoCodigo = await contatoservice.inserir(nome,sobrenome, telefone, email);
            json.result = {
                codigo: contatoCodigo,
                nome,
                sobrenome,
                telefone,
                email
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json)
    },
    alterar: async(req,res)=>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let sobrenome = req.body.sobrenome;
        let telefone = req.body.telefone;
        let email = req.body.email;
      


        if(nome && sobrenome && telefone && email && codigo){
            await contatoservice.alterar(nome,sobrenome, telefone, email,codigo);
            json.result = {
                nome,
                sobrenome,
                telefone,
                email,
                codigo
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json)
    },
    excluir: async(req,res)=>{
        let json = {error:'', result:{}};

        await contatoservice.excluir(req.params.codigo);

        res.json(json);
    }
};