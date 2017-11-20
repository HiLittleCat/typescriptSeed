/**
 * 日志配置
 * 开发环境直接输出到控制台，不写入文件
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