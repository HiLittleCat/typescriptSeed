import { createConnection, ConnectionOptions } from 'typeorm';

/**
 * 初始化mysql数据库连接
 */
const ConnectOptions: ConnectionOptions = Object.assign({ entities: [__dirname + '/../component/**/model/*.js'] }, Config.ormconfig);
const Connect = createConnection(ConnectOptions);