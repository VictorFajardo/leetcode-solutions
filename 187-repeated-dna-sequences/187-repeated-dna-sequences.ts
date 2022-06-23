function findRepeatedDnaSequences(s: string): string[] {
    const seen = new Set<string>();
    const response = new Set<string>();
    const l = 10;
    
    for (let i = 0; i < s.length - l + 1; i++) {
        const sequence = s.substring(i, i + l);
        if (seen.has(sequence)) response.add(sequence);
        seen.add(sequence);
    }
    
    return Array.from(response);
};