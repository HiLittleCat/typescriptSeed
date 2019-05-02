import 'reflect-metadata';

const conditional = require('koa-conditional-get');
const helmet = require('koa-helmet');
const etag = require('koa-etag');
const koaStatic = require('koa-static')
const koaSession = require('koa-session')
const bodyparser = require('koa-bodyparser')


/**
 * 路由框架
 */
import { createKoaServer, useContainer } from 'routing-controllers';

/**
 * 依赖注入模块
 */
import { Container } from 'typedi';

/**
 * 自定义中间件
 */
import { container, timeout } from './middleware/middlewares';

/**
 * 全局变量定义
 */
import init from './init/global';

export default (CFG, ENV) => {
    /**
     * 初始化
     * 全局变量
     */
    init(CFG, ENV);

    /**
     * 应用配置
     */
    useContainer(Container);
    var app = createKoaServer({
        //defaultErrorHandler: false,
        classTransformer: false,
        defaults: {
            //with this option, null will return 404 by default
            nullResultCode: 404,

            //with this option, void or Promise<void> will return 204 by default 
            undefinedResultCode: 204,

            paramOptions: {
                //with this option, argument will be required by default
                required: true
            }
        },
        /**
         * 控制器
         */
        controllers: [__dirname + '/component/**/controller/*.js'],
        /**
         * 自定义中间件
         */
        middlewares: [container, timeout],
        /**
         * 定义拦截器
         */
        interceptors: [__dirname + '/interceptor/*.js']
    });

    app.keys = ['littlecat'];

    /**
     * 第三方中间件
     */
    app.use(helmet());
    app.use(conditional());
    app.use(etag());
    app.use(bodyparser());
    app.use(koaStatic(__dirname + '/../public'));
    app.use(koaSession(CFG.session, app));

    /**
     * 启动应用
     */
    app.listen(CFG.port);
    Logger.info(`app listening on ${CFG.port}, running on ${ENV}`);

    app.on('error', function (err: object, ctx: object) {
        Logger.error('server error', err, ctx);
    });

    process.on('uncaughtException', function (err) {
        Logger.error(' uncaughtException: ' + err.stack);
    });
}
