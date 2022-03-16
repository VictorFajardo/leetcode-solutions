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
    let sum = 0
    
    while (l1 || l2) {
        sum = sum >= 10 ? 1 : 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        curr.next = new ListNode(sum >= 10 ? sum - 10 : sum)
        curr = curr.next
        
    }
    
    if (sum >= 10) curr.next = new ListNode(1)
    return tempHead.next
    
};

// time complexity: O(max(n, m)
// space complexity: O(max(n, m))