import { UseBefore, ContentType, JsonController, Param, Body, Get, Post, Put, Delete, UploadedFile, QueryParam } from 'routing-controllers';
import { Service, Container } from 'typedi';
import Serv from '../service/user';
import validator from 'validator';

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
    signMobile(@Body() user: any) {
        let mobile = user.mobile, password = user.password;
        if (!validator.isMobilePhone(mobile, 'zh-CN')) {
            throw new ValidationError('手机号码不正确');
        }
        if (!validator.isLength(password, { min: 8, max: 30 })) {
            throw new ValidationError('密码不符合要求');
        }
        return this.serv.signMobile(mobile, password);
    }
}

