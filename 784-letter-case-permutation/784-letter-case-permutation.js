/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    // Breadth-First Search
    const n = s.length
    const queue = [s] //replace with a Linked List
    let index = 0
    
    while (queue.length && index < n) {
        if (s[index] >= '0' && s[index] <= '9') {
            index++
        } else {
            let qLength = queue.length        
            for (let i = 0; i < qLength; i++) {
                let curr = queue.shift()
                //LowerCase
                queue.push(curr.substr(0, index) + curr.charAt(index).toLowerCase() + curr.substr(index + 1))
                //UpperCase
                queue.push(curr.substr(0, index) + curr.charAt(index).toUpperCase() + curr.substr(index + 1))
            }
            index++
        }
    }
    
    return queue
    
    // Depth-First Seach
    /*const res = []
    
    const BFS = (s, index, res) => {
        if (index === s.length) {
            res.push(s)
            return
        }
        
        if (s[index] >= '0' && s[index] <= '9') {
            BFS(s, index + 1, res)
        } else {
            //LowerCase
            s = s.substr(0, index) + s.charAt(index).toLowerCase() + s.substr(index + 1)
            BFS(s, index + 1, res)
            //UpperCase
            s = s.substr(0, index) + s.charAt(index).toUpperCase() + s.substr(index + 1)
            BFS(s, index + 1, res)
        }
        
        return res        
    }
    
    return backtracking(s, 0, res)*/
    
    // Backtracking
    /*    const res = []
    
    const backtracking = (s, index, res) => {
        if (index === s.length) {
            res.push(s)
            return
        }
        
        if (s[index] >= '0' && s[index] <= '9') {
            backtracking(s, index + 1, res)
        } else {
            //LowerCase
            s = s.substr(0, index) + s.charAt(index).toLowerCase() + s.substr(index + 1)
            backtracking(s, index + 1, res)
            //UpperCase
            s = s.substr(0, index) + s.charAt(index).toUpperCase() + s.substr(index + 1)
            backtracking(s, index + 1, res)
        }
        
        return res        
    }
    
    return backtracking(s, 0, res)*/
    
};

// Depth-First Seach

// Breadth-First Search

// Backtracking
// time complexity: O(n) // permutations
// space complexity: O(n) // permitations