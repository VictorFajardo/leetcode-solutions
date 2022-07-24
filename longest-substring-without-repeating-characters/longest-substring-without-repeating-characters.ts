function lengthOfLongestSubstring(s: string): number {
    const n: number = s.length
    let windowStart: number = 0;
    let windowEnd: number = 0;
    let seen: Map<string, number> = new Map();
    let maxLength: number = 0;
    
    for (; windowEnd < n; windowEnd++) {
        const endChar: string = s[windowEnd];
        
        if (seen.has(endChar)) {
            windowStart = Math.max(windowStart, seen.get(endChar) + 1);
        }
        
        seen.set(endChar, windowEnd);
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
    
};