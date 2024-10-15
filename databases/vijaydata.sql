use vijay;

create table users(
	id int unique not null auto_increment,
    name varchar(255) not null,
    email varchar(255)  not null,
    status boolean default true,
    createAt timestamp default current_timestamp,
    primary key(id)
);

insert into users(name, email)  values('vijay', 'vijay@gmail.com'),('pravin', 'vijay@gmail.com'),('jinis', 'vijay@gmail.com');

create table product(
  id int unique not null auto_increment,
  name varchar(255),
  price decimal default 0.0,
  
  primary key(id)
);

insert into product(name, price) values 
('milk', '22.5'),
('crud', '12.5'),
('carrot', '2.5'),
('chicken', '100'),
('bread', '45');

create table invoice(
	id int unique not null auto_increment,
    userid int,
    productid int, 
    quanity int,
    price decimal,
    
    primary key(id),
    foreign key(userid) references users(id),
    foreign key(productid) references product(id)
);

insert into invoice(userid, productid, quanity) values (1,4,3),(2,3,2),(2, 1,1),(1,3,4);
userrole
select * from invoice;