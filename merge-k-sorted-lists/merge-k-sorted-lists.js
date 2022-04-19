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
    const minPQ = new MinPriorityQueue()
    let sorted = new ListNode()
    let current = sorted
   
    lists.map((list, index) => {
        if (list) minPQ.enqueue(list.next, list.val)
    })
    
    while (!minPQ.isEmpty()) {
        let { priority, element } = minPQ.dequeue()
        current.next = new ListNode(priority)
        current = current.next
        
        if (element) {
            minPQ.enqueue(element.next, element.val)
        }
    }
    
    return sorted.next
};

// Priority Queue
// time complexity: O(N*log(k))
// space complexity: O(n)