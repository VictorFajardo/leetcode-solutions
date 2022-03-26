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
    
    let sorted = new ListNode(0)
    sorted.next = head
    
    let prev = sorted
    let current = head
    
    while (current) {
        let value = current.val
        
        if (current.next && current.next.val === value) {
            while (current.next && current.next.val === value) {
                current = current.next
            }

            prev.next = current.next
        } else {
            prev = current
        }
        
        current = current.next    
    }
    
    return sorted.next
    
};

// Linked List
// time complexity: O(n)
// space complexity: O(1)