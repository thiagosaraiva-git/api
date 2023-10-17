import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import ShoeModel from "./models/shoeModel.js";

const app = express();
dotenv.config();
app.use(cors())

const { MONGO_URI } = process.env

let db = await mongoose.connect(MONGO_URI)

// app.use((req, res, next) => {
//     console.log('I am some middleware')
//     next()
// })

app.get("/shoes", async (req, res) => {
    let shoes = await ShoeModel.find({})
    res.json(shoes)
})

const PORT = process.env.PORT || 2540
app.listen(PORT, ()=>{
    console.log(`Now listening on port ${PORT}.`)
});