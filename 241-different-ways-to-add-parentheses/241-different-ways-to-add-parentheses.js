/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let response = []
    
    
    if (!expression.includes('-') && !expression.includes('+') && !expression.includes('/') && !expression.includes('*')) {
        return [Number(expression)]
    }
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i]
        if (char === '-' ||
            char === '+' ||
            char === '/' ||
            char === '*') {
            let left = expression.substring(0, i)
            let right = expression.substring(i + 1)
            let leftResponse = diffWaysToCompute(left)
            let rightResponse = diffWaysToCompute(right)
            for (let l of leftResponse) {
                for (let r of rightResponse) {
                    switch (char) {
                        case '-' :
                            response.push(l - r)
                            break
                        case '+' :
                            response.push(l + r)
                            break
                        case '/' :
                            response.push(l / r)
                            break
                        case '*' :
                            response.push(l * r)
                            break
                        default :
                            break
                    }
                }
            }
            
        }
    }
    return response
};
