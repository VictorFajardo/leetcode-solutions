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
    let tempHead = new ListNode()
    let curr = tempHead
    let carry = 0
    
    while (l1 || l2) {
        let top = l1 ? l1.val : 0
        let bottom = l2 ? l2.val : 0
        let sum = top + bottom + carry
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    
    if (carry > 0) curr.next = new ListNode(carry)
    return tempHead.next
    
};

// time complexity: O(max(n, m)
// space complexity: O(max(n, m))