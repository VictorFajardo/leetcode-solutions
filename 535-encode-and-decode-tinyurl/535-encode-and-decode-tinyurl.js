const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const long = new Map()
const short = new Map()
const baseUrl = 'http://tinyurl.com/'

const generateNewKey = () => {
    let newKey = ''
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 62)
        newKey += alphabet[randomNumber]
    }
    return newKey
}

let key = generateNewKey()

const encode = function(longUrl) {
    if (long.has(longUrl)) {
        return long.get(longUrl)
    }
    while (long.has(key)) {
        key = generateNewKey()
    }
    long.set(longUrl, key)
    short.set(key, longUrl)
    return baseUrl + key
}

const decode = function(shortUrl) {
    let key = shortUrl.replace(baseUrl, '')
    if (short.has(key)) {
        return short.get(key)    
    }
    return
}



