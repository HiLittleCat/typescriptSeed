/**
 * 自定义工具集
 */
const crypto = require('crypto');

export default class {
    /**
     * 字符串转为对应的code
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static getCodeFromString(str: string): string {
        let code = '';
        for (let i = 0; i < str.length; i++) {
            code += str.charCodeAt(i);
        }
        return code;
    }
    /**
     * md5加密
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static toMD5(str: string): string {
        var md5 = crypto.createHash('md5');
        md5.update(str);
        var sign = md5.digest('hex');
        return sign;
    }
    /**
     * base64编码
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static decodeBase64(str: string): string {
        return new Buffer(str).toString('base64');
    }
    /**
     * base64解码
     * 
     * @param {string} str 
     * @returns {string}
     */
    static undecodeBase64(str: string): string {
        return new Buffer(str, 'base64').toString();
    }
}