function addBinary(a: string, b: string): string {
    const arrA: string[] = a.split('');
    const arrB: string[] = b.split('');
    let rest: number = 0;
    let addition: string = '';
    
    while (arrA.length || arrB.length) {
        let digitA: number = Number(arrA.pop()) || 0;
        let digitB: number = Number(arrB.pop()) || 0;
        
        let sum: number = digitA + digitB + rest;
        
        if (sum >= 2) {
            sum %= 2;
            rest = 1;
        } else {
            rest = 0;
        }
        
        addition = sum.toString() + addition;
    }
    
    return rest > 0 ? '1' + addition : addition;

};