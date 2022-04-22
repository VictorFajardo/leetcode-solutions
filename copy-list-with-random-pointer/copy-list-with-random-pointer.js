/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const list = {}
    let counter = 0
    while (head) {
        let n = 0
        if (head.random) {
            let random = head.random
            n = 1
            while (random.next) {
                random = random.next
                n++
            }   
        }
        let node = new Node(head.val, null, n === 0 ? null : n)
        list[counter] = node
        head = head.next
        counter++
    }
    for (let i = 0; i < counter; i++) {
        let current = list[i]
        current.next = list[i + 1] || null
        if (current.random) {
            current.random = list[counter - current.random]
        }
    }
    // console.log(list, counter)
    return list[0]
    
};