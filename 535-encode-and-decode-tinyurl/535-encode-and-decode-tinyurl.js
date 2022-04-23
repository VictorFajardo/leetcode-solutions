const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const database = {}
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
    // let shortUrl = Date.now()
    // while(key in database) {
        // key = generateKey()
    // }
    // database[key] = longUrl
    let shortUrl = baseUrl + Date.now()
    long.set(longUrl, shortUrl)
    short.set(shortUrl, longUrl)
    return shortUrl
}

var decode = function(shortUrl) {
    // console.log(database)
    // let key = shortUrl.replace(baseUrl, '')
    // return database[key]
    return short.get(shortUrl)
}



