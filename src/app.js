import { } from 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './routes/api';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Routes);


export default app;