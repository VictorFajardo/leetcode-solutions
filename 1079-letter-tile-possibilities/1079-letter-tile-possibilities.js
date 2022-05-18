/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const visited = new Set()
    let count = 0
        
    for (let i = 0; i < tiles.length; i++) {
        let char = tiles.charAt(i)
        //skip visited characters
        if (visited.has(char)) continue
        
        count += numTilePossibilities(tiles.substring(0,i) + tiles.substring(i + 1)) + 1
        visited.add(char)
    }
    
    return count
};