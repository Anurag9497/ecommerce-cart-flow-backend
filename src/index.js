import './database';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { productRoute } from './routes/productRoute';




const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());



productRoute(app);


app.all('/', (req, res) => res.send("Welcome to Ecommerce Backend"));


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));