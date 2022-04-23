const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const database = {}
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
    let key = generateKey()
    while(key in database) {
        key = generateKey()
    }
    database[key] = longUrl
    return baseUrl + key
}

var decode = function(shortUrl) {
    console.log(database)
    let key = shortUrl.replace(baseUrl, '')
    return database[key]
}



