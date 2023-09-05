create database dbApiClientes;

use dbApiClientes;

create table clientes (
codigo int primary key auto_increment,
nome varchar(30),
email varchar(100),
endereço varchar(50)
);

insert into clientes (nome, email, endereço) values ('Gustavo', 'gustavo@gmail.com', 'Rua Carlos Barattino');

select * from clientes;