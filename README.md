# say-api-server 

Install Node.js sur https://nodejs.org/en/download/ 

Install VisualcodeStudio sur https://code.visualstudio.com/  

Install Git sur https://git-scm.com/downloads

Clone or download github project 

-- Modules installed: express, express-graphql, graphql , bcrypt, lodash, ... 


Install Nodemon (with administrator rights) by :  npm install -g nodemon

Run the command : nodemon server.js

Download mysql workbench 

Install ORM sequelize (with administrator rights) : 
  
  1) npm install -g sequelize-cli
  2) npm install --save sequelize@3.30.4
  3) npm install mysql --save
  4) sequelize init

Modify your config.json by writing your db adresse

Create the class  : 

1) sequelize model:create --attributes "email:string username:string password:string bio:string isAdmin:boolean" -- name User

2) Create the db

3) Run the command : sequelize db:migrate

4) Go to workbench, database => reverse engineer => Click Execute


  

