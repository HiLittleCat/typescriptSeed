const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../config/db');
const mongo = db == undefined || db.mongoose == undefined || db.mongoose.databaseUrl == Config.mongoose.databaseUrl ? Mongo : mongoose.createConnection(db.mongoose.databaseUrl, db.mongoose.options);

const userSchema = new Schema({
    type: {
        type: Number,
        default: 1
    }, //用户类型，1：手机号，2：微信
    name: String, //用户名字
    logo: String, //存储头像图片url
    birthday: String, //生日
    mobile: {
        type: String,
        index: 'hashed',
    }, //手机号码
    password: String, //用户密码，md5加密保存
    idType: Number, //身份标识类型
    idNumber: String, //身份证件号码
    createAt: {
        type: Number,
        default: Date.now
    }
}, { read: 'secondaryPreferred' });

export const User = mongo.model('user', userSchema, 'user');


