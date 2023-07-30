# BestDeal

BestDeal is eCommerce app where you can buy products. User can leave reviews on products. They can shop with shopping cart and submit thier order.
![CapstoneProject](https://user-images.githubusercontent.com/95883222/179445330-62946e4d-e6f4-49af-990e-eb0bc575684a.gif)






## Technologies Used
<img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" height=40/><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

## Getting Started
1. Clone this repository

   `https://github.com/starsabhi/BestDeal`

2. Install dependencies inside both `/backend` as well as `/frontend`.

   `npm install`

3. Create .env file same as .envexample file.
4. Create a user in psql based on your .env DB_USERNAME.
  
    `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Start your shell and migrate and seed the database.   

    `npx dotenv sequelize db:migrate`
    `npx dotenv sequelize db:seed:all`
6. To start application run `npm start` inside both `/backend` and `/frontend`   


## Deploy on Heroku
1. Login in Heroku.`heroku login` 
2. Add Heroku as a remote to your project's git repository with this command.(change your app name)
   `heroku git:remote -a <name-of-Heroku-app>`
3. Initialize `npm init -y` in root directory and then Connect backend and frontend together with `npm --prefix backend install backend && npm --prefix frontend install frontend` command   
4. Deploy your app on Heroku with `git push heroku main-branch:master` from main branch.

## Feature List
1. (CRUD) Log-in user can create, update, delete thier own reviews. All users can read reviews on prduct detail page.
![Capstone](https://user-images.githubusercontent.com/95883222/179638935-21b3cc5c-01cf-4b44-897a-b9b53a302b18.gif)


2. (CRUD) Log-in user can create, update(quantity) , delete shopping carts products. They can view their cart on shoppiing detail page. 
![Capstone2](https://user-images.githubusercontent.com/95883222/179639050-f1f3336b-1e9e-4bea-9b9f-5ac5226f8de9.gif)


3. (CRUD) Log-in user can create ,view, update order (if its same day as order day), delete thier order on order detail page.
 ![Capstone3](https://user-images.githubusercontent.com/95883222/182003919-114eae6b-cc8b-41fa-befd-730ff7dec70e.gif)




## Future Feature List
1. search bar for searching items
2. implementing AWS store for reviews so user can update photos with thiers reviews
