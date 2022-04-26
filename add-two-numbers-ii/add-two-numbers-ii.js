/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const n1 = []
    const n2 = []
    
    while (l1) {
        n1.push(l1.val)
        l1 = l1.next
    }
    
    while (l2) {
        n2.push(l2.val)
        l2 = l2.next
    }
    
    let head = null
    let next = null
    let rest = 0
    
    while (n1.length || n2.length) {
        let val1 = n1.length ? n1.pop() : 0
        let val2 = n2.length ? n2.pop() : 0
        let sum = val1 + val2 + rest
        rest = sum > 9 ? 1 : 0
        sum = sum > 9 ? sum % 10 : sum
        head = new ListNode(sum)
        head.next = next
        next = head
    }
    
    if (rest) {
        head = new ListNode(rest)
        head.next = next
    }
    
    return head
};