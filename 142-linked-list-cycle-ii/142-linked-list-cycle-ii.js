/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    let intersect = detectIntersect(slow, fast)
    return intersect ? calculateCycleLength(head, intersect) : null
};


var detectIntersect = function(slow, fast) {
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return slow
    }
    return null
}

var calculateCycleLength = function(slow, fast) {
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}

// Fast & Slow Pointers
// time complexity: O(n)
// space complexity: O(1)