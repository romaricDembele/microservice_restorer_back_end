"use strict";
// Import field valitator from utils
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Article, Menu } = require('../models/index');
exports.articleById = (req, res, next) => {
};
exports.readArticles = (req, res, next) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(articles);
            res.json(articles);
        }
    }).select({ __v: 0 });
};
exports.createArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const articleDocument = new Article(req.body);
    try {
        const response = yield articleDocument.save();
        res.json(response);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield Article.updateOne({ _id: req.params.id }, req.body).exec();
        res.json(article);
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = Article.deleteOne({ _id: req.params.id }).exec();
        res.status(204).json(article);
    }
    catch (error) {
        console.log(error);
        return;
    }
});
// Menu helpers
exports.menuById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.readMenus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    Menu.find({}, (err, menus) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(menus);
            res.status(200).json(menus);
        }
    });
});
// exports.readMenu = async (req: any, res: any, next: any) => {
// };
exports.createMenu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const menuDocument = new Menu(req.body);
    try {
        const response = yield menuDocument.save();
        res.status(201).json(response);
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateMenu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const response = yield Menu.updateOne({ _id: req.params.id }, req.body).exec();
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
});
exports.removeMenu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = Menu.deleteOne({ _id: req.params.id }).exec();
        return res.status(204).json({ message: 'successfully deleted' });
    }
    catch (error) {
        console.log(error);
        return;
    }
});
