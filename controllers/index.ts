
// Import field valitator from utils


const {Article, Menu} = require('../models/index');

exports.articleById = (req: any, res: any, next: any) => {

};

exports.readArticles = (req: any, res: any, next: any) => {
    Article.find({}, (err: any, articles: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(articles);
            res.json(articles);
        }
    }).select({ __v: 0 });
};


exports.createArticle = async (req: any, res: any, next: any) => {
    console.log(req.body);
    const articleDocument = new Article(req.body);
    try {
        const response = await articleDocument.save();
        res.json(response);
    } catch (error) {
        console.log(error);
    }

};

exports.updateArticle = async (req: any, res: any, next: any) => {

    try {
        const article = await Article.updateOne({ _id: req.params.id }, req.body).exec();
        res.json(article);
    } catch (error: any){
        console.log(error);
    }
  
};

exports.removeArticle = async (req: any, res: any, next: any) => {
    try {
        const article = Article.deleteOne({ _id: req.params.id }).exec();
        res.status(204).json(article);
    } catch (error: any) {
        console.log(error);
        return
    }
};

// Menu helpers
exports.menuById = async (req: any, res: any, next: any) => {

};

exports.readMenus = async (req: any, res: any, next: any) => {
    Menu.find({}, (err: any, menus: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(menus);
            res.status(200).json(menus);
        }
    });
}; 

// exports.readMenu = async (req: any, res: any, next: any) => {

// };

exports.createMenu = async (req: any, res: any, next: any) => {
    console.log(req.body);
    const menuDocument = new Menu(req.body);
    try {
        const response = await menuDocument.save();
        res.status(201).json(response);  
    } catch (err) {
        console.log(err);  
    }

};

exports.updateMenu = async (req: any, res: any, next: any) => {
    console.log(req.body);
    try {
        const response = await Menu.updateOne({ _id: req.params.id }, req.body).exec();
        res.status(200).json(response);  
    } catch (err) {
        console.log(err);
    }
};

exports.removeMenu = async (req: any, res: any, next: any) => {
    try {
        const menu = Menu.deleteOne({ _id: req.params.id }).exec();
        return res.status(204).json({ message: 'successfully deleted' });
    } catch (error: any) {
        console.log(error);
        return;
    }
}; 