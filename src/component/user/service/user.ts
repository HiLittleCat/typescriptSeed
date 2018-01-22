import { Service } from 'typedi';
import assert = require('assert');
import Dao from '../dao/index';

@Service()
export default class {

    constructor(private dao: Dao) {
    }

    /**
     * 用手机号注册用户
     * 
     * @param {string} mobile 用户信息
     * @param {string} password 用户信息
     * 
     * @returns 
     */
    async signMobile(mobile: string, password: string) {
        let bool = await this.dao.isMobileSign(mobile);
        if (bool) {
            throw new ResourceExistError('手机号码已注册过');
        }
        password = Util.toMD5(password);
        return this.dao.createUser({ mobile, password });
    }

}
