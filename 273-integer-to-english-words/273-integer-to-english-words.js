/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const dictionary = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety'
    }
    let counter = 1
    let words = ''

    if (!num) return dictionary[0]
    
    let billion = Math.floor(num / 1000000000)
    let million = Math.floor((num - billion * 1000000000) / 1000000)
    let thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000)
    let rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000
    
    if (billion) {
        words += (words.length !== 0 ? ' ' : '') + toString(billion, dictionary) + ' Billion'
    }
    if (million) {
        words += (words.length !== 0 ? ' ' : '') + toString(million, dictionary) + ' Million'
    }
    if (thousand) {
        words += (words.length !== 0 ? ' ' : '') + toString(thousand, dictionary) + ' Thousand'
    }
    if (rest) {
        words += (words.length !== 0 ? ' ' : '') + toString(rest, dictionary)
    }
    
    return words
};

var toString = function(num, dictionary) {
    let hundred = Math.floor(num / 100)
    let ten = Math.floor((num - hundred * 100) / 10)
    let one = num - hundred * 100 - ten * 10
    let str = ''    

    if (hundred) {
        str += dictionary[hundred] + ' Hundred'
    }
    
    if (ten === 1 && one) {
        str += (str.length !== 0 ? ' ' : '') + dictionary[10 + one]
    } else {
        if (ten) {
            str += (str.length !== 0 ? ' ' : '') + dictionary[ten * 10]
        }
        if (one) {
            str += (str.length !== 0 ? ' ' : '') + dictionary[one]
        }
    }

    
    return str
}