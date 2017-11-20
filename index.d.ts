
declare const RESOUCE

declare const Config

declare const Logger

declare const AccessLogger

declare const ENV

declare const Mongo

declare const MongoC

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

declare const ResourceNotFoundError, ResourceExistError, CheckError

declare const Redis

declare const AppSession