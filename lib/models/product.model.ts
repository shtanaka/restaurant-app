import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: 'New Product'
  }
});