/**
 * 日志配置
 * 开发环境直接输出到控制台，不写入文件
 */
export default Object.freeze({
    log4js: {
        appenders: {
            service: {
                category: 'service',
                type: 'file',
                filename: __dirname + '/../../logs/service.log',
                maxLogSize: 10485760, //文件最大字节数
                backups: 100, //表示备份的文件数量,如果文件过多则会将最旧的删除
                encoding: 'utf-8',
            },
            access: { type: 'console' },
        },
        categories: {
            service: { appenders: ['service'], level: 'trace' },
            access: { appenders: ['access'], level: 'trace' },
            default: { appenders: ['service', 'access'], level: 'trace' }
        },
        disableClustering: true
    }
});