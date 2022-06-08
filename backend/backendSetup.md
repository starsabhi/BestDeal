1-npm init -y

2 - npm install bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator helmet jsonwebtoken morgan per-env pg sequelize-cli

3- npm install -D dotenv-cli nodemon

4- npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
