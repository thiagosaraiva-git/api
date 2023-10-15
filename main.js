/*
    express
    cors
    dotenv
    mongoose

    import x from ""
    import {y, z} from ""

    https://mockaroo.com/
*/

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// https://www.npmjs.com/package/cors
// 4th subsection under "Usage" called Configuring CORS w/ Dynamic Origin
import cors from "cors"
const app = express();
dotenv.config();

app.use(cors())

/*
const whitelist = ['http://localhost:3000', 'http://localhost:4321']
app.use(cors({
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else callback(new Error('Not allowed by CORS'))
    }
}))
*/


const {MONGO_URI, DOUG_URI} = process.env


let db = await mongoose.connect(MONGO_URI)

console.log(db)

const PORT = process.env.PORT || 2540
app.listen(PORT, ()=>{
    console.log(`Now listening on port ${PORT}.`)
});