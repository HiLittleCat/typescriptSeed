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
        database: 'littlecat',
        charset: 'utf8',
        connectTimeout: 10000,
        usePool: true,
        autoSchemaSync: true //生产环境要配置为false
    },
    mongoose: {
        databaseUrl: 'mongodb://127.0.0.1:27017/littlecat',
        options: {
            auto_reconnect: true,
            poolSize: 5,
            socketTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            autoIndex: true,
            readPreference: 'secondaryPreferred',
            //replset: { rs_name: '' } 副本集配置
        }
    },
    redis: {
        host: '127.0.0.1',
        auth: '',
        port: 6379,
        maxclients: 10,
        minclients: 5,
        defaultExpire: 3600  //默认缓存一小时
    }
};