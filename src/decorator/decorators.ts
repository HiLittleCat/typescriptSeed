/**
 * 自定义装饰器
 */
import { RESOUCE } from '../resource/resource';

import { createParamDecorator, HttpError } from 'routing-controllers';

//参数装饰器，校验客户端session
export function AppSession(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options && options.required ? true : false,
        value: async action => {
            const token = action.request.headers['user-agent'];
            let user = await Redis.get(RESOUCE.AppSession + ':' + token);
            if (!user) {
                throw new HttpError(500, '未登录');
            }
            return JSON.parse(user);
        }
    });
}
