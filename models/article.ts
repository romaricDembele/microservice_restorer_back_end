const mongoosejs = require('mongoose');

const articleSchema = new mongoosejs.Schema({
    name: String,
    type: String,
    quantity: Number,
    price: Number
},{ collection : 'articles' });

const Article = mongoosejs.model('Article', articleSchema,'articles');

module.exports = Article;

