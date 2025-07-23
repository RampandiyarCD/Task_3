import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/connection.js';
import tableCreation from './config/tableCreation.js';
import routes from './routes/userRoutes.js';


const app = express();
app.use(express.json());
dotenv.config();


app.use('/user',routes);

app.get("/", (req,res)=>{
    res.send("<h1>hello</h1>")
})
sequelize;



// tableCreation();
app.listen(process.env.PORT,()=>{
    try {
        console.log(`Server Running Successfully`)
    } catch (error) {
        console.error()
    }
})




