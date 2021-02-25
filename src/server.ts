import "reflect-metadata"
import express from "express";

const app = express();
import './database'
app.use(express.json());

import { router } from "./routes";


app.use(router)

app.listen(3333,()=>{
    console.log("server is runing");
});