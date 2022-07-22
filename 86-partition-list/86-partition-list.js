/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    const beforeHead = new ListNode();
    const afterHead = new ListNode();
    let before = beforeHead;
    let after = afterHead;
    
    while (head) {
        if (head.val >= x) {
            after.next = head;
            after = head;
        } else {
            before.next = head;
            before = head;
        }
        head = head.next;
    }
    
    before.next = afterHead.next;
    after.next = null;
    
    return beforeHead.next;
};