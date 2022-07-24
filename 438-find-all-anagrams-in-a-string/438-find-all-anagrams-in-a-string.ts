function findAnagrams(s: string, p: string): number[] {
    const response: number[] = [];
    const n: number = s.length;
    const m: number = p.length;
    let counter: number = 0;
    let windowStart: number = 0;
    let windowEnd: number = 0;
    const frequency: Map<string, number> = new Map();
    
    for (let character of p) {
        if (!frequency.has(character)) frequency.set(character, 0);
        frequency.set(character, frequency.get(character) + 1);
    }
    
    for (; windowEnd < n; windowEnd++) {
        const currentChar: string = s[windowEnd];
        if (frequency.has(currentChar)) {
            if (frequency.get(currentChar) > 0) counter += 1;
            frequency.set(currentChar, frequency.get(currentChar) - 1);
        }
        
        if (windowEnd >= m - 1) {
            if (counter === m) response.push(windowStart);
            
            const startChar: string = s[windowStart];
            if (frequency.has(startChar)) {
                frequency.set(startChar, frequency.get(startChar) + 1);
                if (frequency.get(startChar) > 0) counter -= 1;
            }
            windowStart += 1;
        }
    }

    return response;
};