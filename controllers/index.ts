// Import database model
const ArticleModel = require('./models/article');

// Import field valitator from utils

exports.articleById = (req: any, res: any, next: any) => {

};

exports.read = (req: any, res: any, next: any) => {

};


exports.create = async (req: any, res: any, next: any) => {
    console.log(req.body);
    const articleDocument = new ArticleModel(req.body);
    await articleDocument.save();
    res.json({ success: true});
};

exports.update = (req: any, res: any, next: any) => {

};

exports.remove = (req: any, res: any, next: any) => {

};