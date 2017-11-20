/**
 * 通用配置文件，项目启动的时候优先加载
 * */

import Base from './base';
import DB from './db';
import Domain from './domain';
import Log from './log';
import Session from './session';
export default Object.freeze({
    ...Base,
    ...DB,
    ...Domain,
    ...Log,
    ...Session
});