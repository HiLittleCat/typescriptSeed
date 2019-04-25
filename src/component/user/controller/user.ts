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
     * @api {post} /user/sign 用户注册
     * @apiDescription 用户注册
     * @apiName sign
     * @apiGroup user
     * @apiParam {string} mobile 手机号
     * @apiParam {string} password 密码
     * @apiVersion 1.0.0
     */
    @Post('/sign')
    signMobile(@Body() mobile: string, @Body() password: string) {
        if (!validator.isMobilePhone(mobile, 'zh-CN')) {
            return new CheckError('手机号码不正确');
        }
        if (!password || password.length < 6) {
            return new CheckError('密码不符合要求');
        }
        return this.serv.signMobile(mobile, password);
    }
    
}

