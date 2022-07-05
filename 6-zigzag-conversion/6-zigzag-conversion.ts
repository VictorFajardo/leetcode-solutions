function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let n: number = 0;
    const rows: string[] = new Array(numRows).fill('');
    let row: number = 0;
    
    while (n < s.length) {
        const char: string = s.charAt(n);
        rows[row] += char;
        row = (Math.floor(n / (numRows - 1)) % 2 === 0) ? row + 1 : row - 1;
        n += 1;
    }
    
    return rows.join('');

};