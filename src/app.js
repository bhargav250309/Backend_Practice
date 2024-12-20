import express from "express";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended:true, limit: '10mb'}))
app.use(express.static('public'))

export {app}