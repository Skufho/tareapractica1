import express from 'express';
import { PORT } from './config.js';
import productRouter from './routers/product.route.js';
import morgan from 'morgan';


const app = express();

app.use(morgan('dev')); 

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});