# Task_3

This project is a backend system for a banking web application, providing CRUD (Create, Read, Update, Delete) operations for Users, Accounts, and Statements. The application follows the MVC (Model-View-Controller) architectural pattern for better code organization and maintainability.

**Prerequisites to set up this project:**
- Node.js 
- Express.js 
- PostgreSQL 

Yarn version: "1.22.22",

```shell
#Install yarn if you haven't yet:
npm i yarn

#Installing all dependencies:
yarn or yarn install

#To Run the server use:
yarn start
```

Before running the application, you must create a `.env` file in the project root directory to configure the required environment variables:

```env
PORT="YOUR_PORT"
PGUSER="YOUR_PG_USERNAME"
PGHOST="YOUR_PG_HOST"
PGDB="YOUR_PG_DB"
PGPORT="YOUR_PG_PORT(default:5432)"
PGPASS="YOUR_PG_PASS"
SECRET_KEY="YOUR_SECRET_KEY"
```

- Replace the empty values with your actual configuration details.
- `PORT`: The port number on which the server will run (e.g., 3000).
- `PGUSER`: PostgreSQL database username.
- `PGHOST`: PostgreSQL database host (e.g., localhost).
- `PGDB`: Name of the PostgreSQL database.
- `PGPORT`: PostgreSQL database port (default is 5432).
- `PGPASS`: PostgreSQL database password.
- `SECRET_KEY`: Secret key used for JWT authentication or

**For creating the tables: Just un Comment the "tablecreation()" function in the index.js**,

## Api end Points to check:

#### For creating a User: "http://localhost:3000/user/"

```shell
#sample json input
{
"userId": "CD001",
"name": "RampandiyarCD",
"password": "5332",
"email": "rampandiyar@gmail.com",
"address": "27-kv,anb,thiru",
"phone": "6380046371"
}

```

#### For login: "http://localhost:3000/user/login"

```shell
#sample json input:
{
"userId": "CD001",
"password": "5332"
}
```

**After login you will get an Token copy it and paste in the Authorization on Bearer token for further api checkings**

#### For creating a Account: "http://localhost:3000/acc/"

```shell
#sample json input
{
"accountId": "CUR123456",
"type": "current",
"branch": "Business Branch",
"ifsc": 654321,
"balance": 20000,
"userId": "CD001"
}

{
"accountId": "SAV123456",
"type": "savings",
"branch": "Business Branch",
"ifsc": 654321,
"balance": 40000,
"userId": "CD001"
}
```

#### For transfering amount :"http://localhost:3000/acc/CUR123456/SAV123456"

Use this ID's if you use my sample inputs

```shell
#sample json input
{
"amount": 1000
}
```
