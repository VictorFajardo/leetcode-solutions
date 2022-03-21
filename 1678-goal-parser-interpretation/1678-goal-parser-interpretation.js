/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let n = 0
    let response = ''
    
    while (n < command.length) {
        if (command[n] === 'G') {
            response += 'G'
            n++
        } else if (command[n] === '(') {
            if (command[n + 1] === ')') {
                response += 'o'
                n += 2
            } else {
                response += 'al'
                n += 4
            }
        }
    }
    
    return response
    
};