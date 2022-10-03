create database dbApiContatos;
use dbApiContatos;

create table contatos (
	codigo int primary key auto_increment,
    nome  varchar(30),
    sobrenome varchar(30),
    telefone varchar(11),
    email varchar(100)
);
insert into contatos (nome,sobrenome,telefone,email) values ('Joao Lucas', 'Schiavon', '43998142217', 'schiavonjohn@gmail.com');
insert into contatos (nome,sobrenome,telefone,email) values ('Pedro Matheus', 'Tashima', '43996838109', 'tashima@gmail.com');

select * from contatos