function findAnagrams(s: string, p: string): number[] {
    const response: number[] = [];
    const n: number = s.length;
    const m: number = p.length;
    let size: number = m;
    let startWindow: number = 0;
    let endWindow: number = 0;
    const frequency: Map<string, number> = new Map();
    
    for (let character of p) {
        if (!frequency.has(character)) frequency.set(character, 0);
        frequency.set(character, frequency.get(character) + 1);
    }
    
    for (; endWindow < n; endWindow++) {
        const currentChar: string = s[endWindow];
        if (frequency.has(currentChar)) {
            if (frequency.get(currentChar) > 0) size -= 1;
            frequency.set(currentChar, frequency.get(currentChar) - 1);
        }
        
        while (size === 0) {
            if (endWindow - startWindow + 1 === m) {
                response.push(startWindow);
            }
            const startChar: string = s[startWindow];
            if (frequency.has(startChar)) {
                frequency.set(startChar, frequency.get(startChar) + 1);
                if (frequency.get(startChar) > 0) size += 1;
            }
            startWindow += 1;
        }
    }

    return response;
};