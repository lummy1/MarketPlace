import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: 'product name is required'

    },
description: {
     type: String,
},

price: {
    type: Number,
    required: 'product price is required'
},
quantity: {
    type: Number,
    required: 'product quantity is required'
},

category: {
    type: String,
},
created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },

})

export default mongoose.model('Product', productSchema);