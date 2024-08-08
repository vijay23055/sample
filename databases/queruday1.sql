-- create schema vijay
use vijay;
create table users(
	id int,
    name varchar(255)
);

insert into users values(1, 'vijay');

select * from users;