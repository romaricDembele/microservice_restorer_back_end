"use strict";
const { mongoose, Schema } = require('mongoose');
const DATABASE_URL = '127.0.0.1:27017/restorer_database';
mongoose.connect(`mongodb://${DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Article Schema
// image url missing
const articleSchema = new Schema({
    name: String,
    type: String,
    quantity: Number,
    price: Number
}, { collection: 'articles' });
// Menu Schema
const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    articles: [{
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            url: {
                type: String,
                required: false
            }
        }],
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: false
    }
});
module.exports.Article = mongoose.model('Article', articleSchema, 'articles');
module.exports.Menu = mongoose.model('Menu', menuSchema, 'menus');
