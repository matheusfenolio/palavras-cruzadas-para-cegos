drop database if exists tcc;
create database tcc;
use tcc;
create table jogo
(
	id int not null auto_increment,
    nome varchar(200),
    size int,
    xml text,
    primary key(id)
);

select * from jogo