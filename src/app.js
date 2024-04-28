import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routerAuth from './routes/auth.routes.js';
import routerTask from './routes/task.routes.js';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', routerAuth)
app.use('/api', routerTask)

export default app;