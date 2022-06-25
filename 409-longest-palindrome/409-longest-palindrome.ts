function longestPalindrome(s: string): number {
    const dictionary = new Set<string>()
    let length: number = 0
    
    for (let char of s) {
        if (dictionary.has(char)) {
            dictionary.delete(char)
            length += 2
        } else {
            dictionary.add(char)
        }
    }
    
    if (dictionary.size) length += 1
    
    return length
};