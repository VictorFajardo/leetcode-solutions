function addBinary(a: string, b: string): string {
    let p1: number = a.length - 1;
    let p2: number = b.length - 1;
    let rest: number = 0;
    let addition: string = '';
    
    while (p1 >= 0 || p2 >= 0 || rest > 0) {
        rest += p1 >= 0 ? Number(a.charAt(p1)) : 0;
        rest += p2 >= 0 ? Number(b.charAt(p2)) : 0;
        
        p1 -= 1;
        p2 -= 1;
        
        addition = (rest % 2).toString() + addition;
        
        rest = Math.floor(rest / 2);
    }
    
    return addition;
};