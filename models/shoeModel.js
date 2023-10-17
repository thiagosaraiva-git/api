import { Schema, model } from 'mongoose';

const shoeSchema = new Schema({
    name: String,
    brand: String,
    image: String,
    stock: Number,
    price: Number
})

const ShoeModel = model("shoes", shoeSchema)

export default ShoeModel