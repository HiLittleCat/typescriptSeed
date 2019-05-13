import { Service } from 'typedi';
import { User } from '../model/index';

@Service()
export default class {

    constructor() {
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
        let cnt = await User.countDocuments({ mobile })
        if (cnt > 0) {
            throw new BusinessError(BizError.No10000);
        }
        password = Util.toMD5(password);
        let user = await User.create({ mobile, password });
        return user._id;
    }
}
