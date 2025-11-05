import dotenv from "dotenv";
import express from "express"
import ConnectDB from "./db/index.js";


dotenv.config({
    path:"./env"
})

ConnectDB();

