declare const RESOUCE: any
declare const Config: any
declare const Logger: any
declare const AccessLogger: any
declare const ENV: any
declare const Mongo
declare const MongoC: any
declare const Redis: any
declare const AppSession: any

declare const BizError: any
declare class BusinessError {
    constructor(message: string)
}
declare class ValidationError {
    constructor(message: string)
}
declare class Util {
    /**
     * 字符串转为对应的code
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static getCodeFromString(str: string): string
    /**
     * md5加密
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static toMD5(str: string): string
    /**
     * base64编码
     * 
     * @param {string} str 
     * @returns {string} 
     */
    static decodeBase64(str: string): string
    /**
     * base64解码
     * 
     * @param {string} str 
     * @returns {string}
     */
    static undecodeBase64(str: string): string
}