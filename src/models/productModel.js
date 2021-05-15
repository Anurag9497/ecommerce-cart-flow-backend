import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const productSchema = new Schema({}, {strict: false});

export const Products = mongoose.model('products', productSchema);