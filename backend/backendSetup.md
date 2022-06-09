1-npm init -y

2 - npm install bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator helmet jsonwebtoken morgan per-env pg sequelize-cli

3- npm install -D dotenv-cli nodemon

4- npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo
npx sequelize seed:generate --name demo-user
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 -npx sequelize model:generate --name Product --attributes name:string,price:float,imageUrl:text,description:text,productInfo:text,category:string
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name product-demo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all
