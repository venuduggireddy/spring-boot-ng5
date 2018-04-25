/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  500540
 * Created: Apr 4, 2018
 */

create table if not exists user
(
   id integer auto_increment not null,
   email varchar(255) not null,
   first_name varchar(255) not null,
   last_name varchar(255) not null, 
   primary key(id)
);