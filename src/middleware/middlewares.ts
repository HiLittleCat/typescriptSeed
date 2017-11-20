import {Middleware, KoaMiddlewareInterface} from 'routing-controllers';

/*
* 入口中间件，对返回数据做格式检查、错误处理等，要在应用中最先加载
*/
@Middleware({type: 'before'})
export class container implements KoaMiddlewareInterface {
    async use(ctx : any, next : (err?: any) => Promise < any >) : Promise < any > {
        try {
            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            //打印响应时间慢的请求日志
            if (ms >= Config.slowResMS && Config.slowResMS > 0) {
                AccessLogger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
            }
            //开发环境打印访问日志
            if (ENV == 'development') {
                Logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
            }
        } catch (err) {
            Logger.error(err);
            ctx.status = 500;
            ctx.body = {
                code: 1,
                message: '服务器错误'
            };
        }
    }
}

/**
 * 响应超时处理中间件
 */
const createError = require('http-errors');
@Middleware({type: 'before'})
export class timeout implements KoaMiddlewareInterface {
    async use(ctx : any, next : (err?: any) => Promise < any >) : Promise < any > {
        const status = 408;
        const message = 'request time-out';
        let timer;
        const timeout = new Promise((_, reject) => {
            timer = setTimeout(() => {
                ctx.state.timeout = true;
                AccessLogger.info(`${ctx.method} ${ctx.url} timeout!`);
                reject(createError(status, message));
            }, Config.timeoutResMS);
        });
        await Promise.race([timeout, next()]);
        clearTimeout(timer);
    }
}
