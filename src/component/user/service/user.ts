import { Service } from 'typedi';
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
            throw new BusinessError(BizError.No10000);
        }
        password = Util.toMD5(password);
        return this.dao.createUser({ mobile, password });
    }

}
