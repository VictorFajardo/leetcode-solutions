const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const long = new Map()
const short = new Map()
const baseUrl = 'http://tinyurl.com/'

var generateKey = function() {
    let key = ''
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 62)
        key += alphabet[random]
    }
    return key
}

var encode = function(longUrl) {
    if (long.has(longUrl)) {
        return long.get(longUrl)
    }
    let key = Date.now()
    long.set(longUrl, key)
    short.set(key, longUrl)
    return baseUrl + key
}

var decode = function(shortUrl) {
    let key = Number(shortUrl.replace(baseUrl, ''))
    if (short.has(key)) {
        console.log('here')
        return short.get(key)    
    }
    return
}



