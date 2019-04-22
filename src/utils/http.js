





/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http.get(url, {
                params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装其他类型的请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, method, data = {}) {
    return new Promise((resolve, reject) => {
        http({
            method,
            url,
            data
        }).then(res => {
            resolve(res.data);
        }, err => {
            reject(err)
        })
    })
}