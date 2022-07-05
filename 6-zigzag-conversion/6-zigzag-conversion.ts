function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let n: number = 0;
    const rows: string[] = new Array(numRows).fill('');
    let row: number = 0;
    let goingUp: boolean = false;
    
    while (n < s.length) {
        const char: string = s.charAt(n);
        rows[row] += char;
        if (row === 0 || row === numRows - 1) goingUp = !goingUp;
        row += goingUp ? 1 : -1;
        n += 1;
    }
    
    return rows.join('');

};