/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return node
    const newNodes = {}
    const queue = new Queue()
    queue.enqueue(node)
    
    while (!queue.isEmpty()) {
        let { val, neighbors } = queue.dequeue()
        newNodes[val] = new Node(val, neighbors)
        neighbors.forEach((node) => {
            if (!(node.val in newNodes)) queue.enqueue(node)
        })
    }
    
    for (let node of Object.values(newNodes)) {
        node.neighbors = node.neighbors.map(node => newNodes[node.val])
    }
    // console.log(visited)
    
    return newNodes[node.val]
    
};