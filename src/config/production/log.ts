/**
 * 日志配置
 * 
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
            access: {
                type: "dateFile", //日志类型
                filename: __dirname + '/../../logs/access', //日志输出位置
                alwaysIncludePattern: true, //是否总是有后缀名
                pattern: "-yyyy-MM-dd.log" //后缀，每小时创建一个新的日志文件
            },
        },
        categories: {
            service: { appenders: ['service'], level: 'info' },
            access: { appenders: ['access'], level: 'info' },
            default: { appenders: ['service', 'access'], level: 'info' }
        },
        disableClustering: true
    }
});