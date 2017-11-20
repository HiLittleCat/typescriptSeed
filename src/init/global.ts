import { RESOUCE } from '../resource/resource';
import Util from '../lib/util';
import * as ERROR from '../error/errors';
import MongoLib from '../database/mongo';
import RedisLib from '../database/redis';
import * as Decorators from '../decorator/decorators';

export default (CFG, ENV) => {
    /**
     * 初始化日志功能
     */
    const log4js = require('log4js');
    log4js.configure(CFG.log4js);
    const Logger = log4js.getLogger('service');
    const AccessLogger = log4js.getLogger('access');

    //const { Mongo, MongoC } = MongoLib(CFG);
    //const Redis = RedisLib(CFG);

    /**
     * 全局变量，各种公共资源在这里定义
     */
    Object.assign(global, {
        Config: CFG,
        RESOUCE,
        Logger,
        AccessLogger,
        ENV: ENV,
        // Mongo,
        // MongoC,
        // Redis,
        Util,
        ...ERROR,
        ...Decorators
    })


}



