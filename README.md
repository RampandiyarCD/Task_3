# Task_3

It is a complete Backend Project so have to check with postman

Yarn version: "1.22.22",

Installing all dependencies: yarn or yarn install,

To Run the server use: yarn start,

For creating the tables: Just un Comment the "tablecreation()" function in the index.js,

Api end Points to check:

For creating a User: "http://localhost:3000/user/"

sample json input
{
"userId": "CD001",
"name": "RampandiyarCD",
"password": "5332",
"email": "rampandiyar@gmail.com",
"address": "27-kv,anb,thiru",
"phone": "6380046371"
}

For login: "http://localhost:3000/user/login"

sample input:
{
"userId": "CD001",
"password": "5332"
}

After login you will get an Token copy it and paste in the Authorization on Bearer token for further api checkings

For creating a Account: "http://localhost:3000/acc/"

sample json input
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

For transfering amount :"http://localhost:3000/acc/CUR123456/SAV123456"

<!-- us this ids if u use my sample inputs -->

sample json input
{
"amount": 1000
}
