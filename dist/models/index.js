"use strict";
const { mongoose, Schema } = require('mongoose');
const DATABASE_URL = '127.0.0.1:27017/restorer_database';
mongoose.connect(`mongodb://${DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// image url missing
const articleSchema = new Schema({
    name: String,
    type: String,
    quantity: Number,
    price: Number
}, { collection: 'articles' });
module.exports.Article = mongoose.model('Article', articleSchema, 'articles');
