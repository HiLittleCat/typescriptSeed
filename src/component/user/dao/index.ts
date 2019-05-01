import { User } from '../model/index';

export default class {
    /**
     * 注册用户
     * 
     * @param {any} user 用户信息
     * @returns 
     */
    createUser(user: object) {
        return new Promise((resolve, reject) => {
            User.create(user, (err, result) => {
                if (err) {
                    Logger.error(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    /**
     * 查询手机号码是否已注册
     * 
     * @param {string} mobile 手机号码
     * @returns 
     */
    isMobileSign(mobile: string) {
        return new Promise<any>((resolve, reject) => {
            User.count({ mobile }, (err, cnt) => {
                if (err) {
                    Logger.error(err);
                    reject(err);
                } else {
                    if (cnt == 0) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }

                }
            });
        });
    }

}
