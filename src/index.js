import './database';
import 'dotenv/config';
import express from 'express';




const PORT = process.env.PORT || 5000;
const app = express();


app.all('/', (req, res) => res.send("Welcome to Ecommerce Backend"));


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));