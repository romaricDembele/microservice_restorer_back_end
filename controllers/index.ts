
// Import field valitator from utils

// import {mongoose, Article} from '../models'

const {Article} = require('../models/index');

exports.articleById = (req: any, res: any, next: any) => {

};

exports.read = (req: any, res: any, next: any) => {
    Article.find({}, (err: any, articles: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(articles);
            res.json(articles);
        }
    });
};


exports.create = async (req: any, res: any, next: any) => {
    console.log(req.body);
    const articleDocument = new Article(req.body);
    const response = await articleDocument.save();
    res.json(response);
};

exports.update = async (req: any, res: any, next: any) => {

    try {
        const article = await Article.updateOne({ _id: req.params.id }, req.body).exec();
        res.json(article);
    } catch (error: any){
        console.log(error);
        return
    }
  
};

exports.remove = async (req: any, res: any, next: any) => {
    try {
        const article = Article.deleteOne({ _id: req.params.id }).exec();
        res.json(article);
    } catch (error: any) {
        console.log(error);
        return
    }
};