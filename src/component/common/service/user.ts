import { Service } from 'typedi';
import assert = require('assert');
import Dao from '../dao/index';
const validator = require('validator');

@Service()
export default class {

    constructor(private dao: Dao) {
    }

    /**
     * 用手机号注册用户
     * 
     * @param {any} user 用户信息
     * @returns 
     */
    async signMobile(user) {
        const [mobile, password] = [user.mobile, user.password];
        if (!validator.isMobilePhone(mobile, 'zh-CN')) {
            throw new CheckError('手机号码不正确');
        }
        if (!password || password.length < 6) {
            throw new CheckError('密码不符合要求');
        }
        let bool = await this.dao.isMobileSign(mobile);
        if (bool) {
            throw new ResourceExistError('手机号码已注册过');
        }
        user.password = Util.toMD5(password);
        return this.dao.createUser(user);
    }

}
