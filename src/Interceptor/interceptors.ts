/**
 * 拦截器，返回数据之前对数据进行处理
 */
import { Interceptor, InterceptorInterface, Action, ContentType } from 'routing-controllers';

@Interceptor()
export class FormatCheck implements InterceptorInterface {

    intercept(action: Action, content: any) {
        //TODO: 对返回数据进行格式检查
        return content;
    }

}