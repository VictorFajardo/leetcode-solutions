/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head
    
    let prev = head
    let current = head.next
    
    while (current) {
        if (current.val === prev.val) prev.next = current.next
        else prev = current
        current = current.next
    }
    
    return head
    
};