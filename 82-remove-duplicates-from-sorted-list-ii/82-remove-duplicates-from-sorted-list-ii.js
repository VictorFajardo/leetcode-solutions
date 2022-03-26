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
    
    let tempHead = new ListNode()
    tempHead.next = head
    
    let prev = tempHead
    let current = tempHead.next
    
    while (current) {
        let value = current.val
        
        if (current.next && current.next.val === value) {
            while (current.next && current.next.val === value) {
                current = current.next
            }

            prev.next = current.next
            current = current.next    
        } else {
            prev = current
            current = current.next
        }
    }
    
    return tempHead.next
    
};