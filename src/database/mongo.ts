/**
 * 启动mongoose，定义通用文档集合，模块集合在各自模块内部定义
 */

export default function (CFG) {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const Mongo = mongoose.createConnection(CFG.mongoose.databaseUrl, CFG.mongoose.options);
    const Schema = mongoose.Schema;

    const MongoC = {

    }

    return {
        Mongo,
        MongoC
    }
}
