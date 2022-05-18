/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const n = tiles.length
    const set = new Set()
    
    const bt = function(str, seq = '', visited = new Set()) {
        //base case
        if (seq.length) set.add(seq)
        if (seq.length === n) return        
        
        for (let i = 0; i < n; i++) {
            //skip visited indexes
            if (visited.has(i)) continue
            
            const char = str.charAt(i)
            visited.add(i)
            bt(str, seq + char, visited)
            visited.delete(i)
        }
    }
    
    bt(tiles)
    
    return set.size
    
};