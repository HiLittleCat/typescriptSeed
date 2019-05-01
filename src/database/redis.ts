'use strict'
/*
 * reids链接池
 */
const genericPool = require('generic-pool');

export default function (CFG) {
    const factory = {
        create: function () {
            return new Promise(function (resolve, reject) {
                try {
                    let client = require('redis').createClient(CFG.redis.port, CFG.redis.host);
                    // redis 验证 (reids.conf未开启验证，此项可不需要)
                    CFG.redis.auth != '' && client.auth(CFG.redis.auth);
                    resolve(client);
                } catch (err) {
                    reject(err);
                }
            })
        },
        destroy: function (client) {
            return new Promise(function (resolve, reject) {
                try{
                    client.quit();
                    resolve();
                }catch(err){
                    reject(err);
                }
            })
        }
    }

    var opts = {
        max: CFG.redis.maxclients,
        min: CFG.redis.minclients,
        idleTimeoutMillis: 100,
        log: false
    }

    const Pool = genericPool.createPool(factory, opts);

    const CacheDB = 1;

    const resourcePromise = Pool.acquire();

    const get = function (key) {
        return new Promise<string>((resolve, reject) => {
            resourcePromise.then(function (client) {
                client.select(CacheDB, function (err) {
                    if (err) {
                        Pool.release(client);
                        reject(err);
                    } else {
                        client.get(key, function (err, data) {
                            Pool.release(client);
                            resolve(data);
                        });
                    }
                });
            })
            .catch(function (err) {
                reject(err);
            });
        });
    };

    const set = function (key, data, expire) {
        return new Promise((resolve, reject) => {
            resourcePromise.then(function (client) {
                client.select(CacheDB, function (err) {
                    if (err) {
                        Pool.release(client);
                        return reject(err);
                    }
                    client.set(key, data, function (err) {
                        if (err) {
                            Pool.release(client);
                            return reject(err);
                        }
                        if (expire) {
                            client.expire(key, expire, function (err) {
                                Pool.release(client);
                                if (err) { reject(err); }
                                else { resolve(); }
                            });
                        } else {
                            client.expire(key, CFG.redis.defaultExpire, function (err) {
                                Pool.release(client);
                                if (err) { reject(err); }
                                else { resolve(); }
                            });
                        }
                    });
                });
            })
            .catch(function (err) {
                reject(err);
            });

        });
    };

    const del = function (key) {
        return new Promise<string>((resolve, reject) => {
            resourcePromise.then(function (client) {
                client.select(CacheDB, function (err) {
                    if (err) {
                        Pool.release(client);
                        reject(err);
                    } else {
                        client.del(key, function (err) {
                            Pool.release(client);
                            resolve();
                        });
                    }
                });
            })
            .catch(function (err) {
                reject(err);
            });
        });
    };

    return { set, get, del };
};

