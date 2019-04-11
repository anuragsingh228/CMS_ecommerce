var mongoose = require("mongoose");

//product schema

var ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String
        },
        desc: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        sorting: {
            type: Number,
        }
    }
);

var Product = mongoose.model('Product', ProductSchema);
module.exports = { Product };