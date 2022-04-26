/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    for (let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case 'M':
                num += 1000
                break
            case 'D':
                num += 500
                break
            case 'C':
                if (s.charAt(i + 1) !== "") {
                  if (s.charAt(i + 1) === 'M') {
                    num += 900
                    i++
                      break
                  } else if (s.charAt(i + 1) === 'D') {
                    num += 400
                    i++
                      break
                  }
                }
                    num += 100
                break
            case 'L':
                num += 50
                break
            case 'X':
                if (s.charAt(i + 1) !== "") {
                  if (s.charAt(i + 1) === 'C') {
                    num += 90
                    i++
                      break
                  } else if (s.charAt(i + 1) === 'L') {
                    num += 40
                    i++
                      break
                  } 
                }
                num += 10 
                break
            case 'V':
                num += 5
                break
            case 'I':
                if (s.charAt(i + 1) !== "") {
                  if (s.charAt(i + 1) === 'X') {
                    num += 9
                    i++
                    break
                  } else if (s.charAt(i + 1) === 'V') {
                    num += 4
                    i++
                    break
                  }
                }
                num += 1
                break
            default:
                break
                
        }
    }
    return num
};