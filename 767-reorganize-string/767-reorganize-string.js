/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    //create a frequency map
    
    const frequency = {}
    
    for (let char of s) {
        if (char in frequency) frequency[char]++
        else frequency[char] = 1
    }
    
    
    //create a MaxPriorityQueue
    
    const maxPQ = new MaxPriorityQueue((a, b) => b.value - a.value)
    
    for (let [key, value] of Object.entries(frequency)) {
        maxPQ.enqueue(key, value)
    }
    
    //create a output string
    
    let response = ''
    let previous = null
    
    while (!maxPQ.isEmpty()) {
        const current = maxPQ.dequeue()
        response += current.element
        if (previous) maxPQ.enqueue(previous.element, previous.priority)
        if (current.priority > 1) {
            previous = {element: current.element, priority: current.priority - 1}
        } else previous = null
    }
    
    if (previous) return ''
    return response
    
};