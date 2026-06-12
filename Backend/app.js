import express from 'express'
import cors from 'cors';

const app = express();


app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true
}));

app.use(express.json({limit: '16mb'}));
app.use(express.urlencoded({extended: true , limit: "16mb"}));


import taskRouter from "./src/routes/tasks.routes.js";

app.use("/api/v1/task", taskRouter);

export {app}