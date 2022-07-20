function numMatchingSubseq(s: string, words: string[]): number {
    let count: number = 0;
    
    
    main: for (let word of words) {
        let prevIdx: number = -1;
        for (let i: number = 0; i < word.length; i++) {
            let char: string = word.charAt(i);
            let idx: number = s.indexOf(char, prevIdx + 1);
            if (idx > prevIdx) {
                prevIdx = idx;
            } else {
                continue main;
            }
        }
        count++;
    }
    
    return count;
};