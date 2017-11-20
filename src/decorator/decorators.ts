import { HttpError } from 'routing-controllers';
/**
 * 自定义装饰器
 */
import { RESOUCE } from '../resource/resource';

import { createParamDecorator } from 'routing-controllers';

export function AppSession(options?: { required?: boolean }) {
    return createParamDecorator({
        required: options && options.required ? true : false,
        value: async action => {
            const token = action.request.headers['user-agent'];
            let user = await Redis.get(RESOUCE.AppSession + ':' + token);
            if (!user) {
                throw new HttpError(500, 'Not Logged In');
            }
            return JSON.parse(user);
        }
    });
}
