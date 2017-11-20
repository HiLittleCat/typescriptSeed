import { ContentType, JsonController, Param, Body, Get, Post, Put, Delete, UploadedFile, QueryParam } from 'routing-controllers';
import { Service } from 'typedi';
import Serv from '../service/user';

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
    signMobile( @Body() user: any) {
        return this.serv.signMobile(user);
    }
    
}

