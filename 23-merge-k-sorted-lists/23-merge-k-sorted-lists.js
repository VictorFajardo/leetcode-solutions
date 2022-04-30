/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const minPQ = new MinPriorityQueue({ compare: (a, b) => a.val - b.val })
    let head = null
    let current = null
    
    for (let list of lists) {
        if (list) {
            minPQ.enqueue(list)
        }
    }

    while (!minPQ.isEmpty()) {
        let min = minPQ.dequeue()
        let node = new ListNode(min.val)
        if (!head) {
            head = node
            current = node
        } else {
            current.next = node
            current = current.next
        }
        min = min.next
        if (min) minPQ.enqueue(min)
    }
    
    return head
    
};

// Priority Queue
// time complexity: O(n*log(k))
// space complexity: O(n)