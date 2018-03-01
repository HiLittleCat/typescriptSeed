import { ContentType, JsonController, Param, Body, Get, Post, Put, Delete, UploadedFile, QueryParam } from 'routing-controllers';
import { Service } from 'typedi';
import Serv from '../service/user';
const validator = require('validator');

@Service()
@JsonController('/user')
export default class {

    constructor(private serv: Serv) {
    }

    /**
     * @api {post} /user/mobile 创建用户
     * @apiName createUser
     * @apiGroup User
     *
     * @apiSuccess {json} 返回用户信息.
     */
    @Post('/sign')
    signMobile( @Body() mobile: string, @Body() password: string) {
        if (!validator.isMobilePhone(mobile, 'zh-CN')) {
            return new CheckError('手机号码不正确');
        }
        if (!password || password.length < 6) {
            return new CheckError('密码不符合要求');
        }
        return this.serv.signMobile(mobile, password);
    }
    
}

