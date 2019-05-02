/**
 * 日志配置
 * 
 */
export default Object.freeze({
    log4js: {
        appenders: {
            service: { type: 'console' },
            access: { type: 'console' },
        },
        categories: {
            service: { appenders: ['service'], level: 'trace' },
            access: { appenders: ['access'], level: 'trace' },
            default: { appenders: ['service', 'access'], level: 'trace' }
        }
    }
});