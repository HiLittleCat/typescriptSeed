/**
 * 数据库配置
 */
export default {
    ormconfig: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'realya',
        charset: 'utf8',
        connectTimeout: 10000,
        usePool: true,
        autoSchemaSync: true //生产环境要配置为false
    },
    mongoose: {
        databaseUrl: '127.0.0.1/realyacst',
        options: {
            server: {
                auto_reconnect: true,
                poolSize: 5
            },
            socketTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            //replset: { rs_name: '' } 副本集配置
        }
    },
    redis: {
        host: '127.0.0.1',
        auth: '123456',
        port: 6699,
        maxclients: 10,
        minclients: 5,
        defaultExpire: 3600  //默认缓存一小时
    }
};