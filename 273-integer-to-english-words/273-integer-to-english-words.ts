function numberToWords(num: number): string {
    if (!num) return 'Zero'
       
    const threeDigitsGroups: number[] = [];
    let response: string = '';
    
    while (num > 0) {
        threeDigitsGroups.unshift(num % 1000);
        num = Math.floor(num / 1000); 
    }
    
    const unitGroups: string[] = ['', 'Thousand', 'Million', 'Billion'];
    
    for (let i = 0; i < threeDigitsGroups.length; i++) {
        const threeDigits: number = threeDigitsGroups[i];
        if (threeDigits) {
            response += (response.length ? ' ' : '') + digitToString(threeDigits) + ' ' + unitGroups[threeDigitsGroups.length - i - 1];    
        }
    }
    
    return response.trim();

};

function digitToString(num: number): string {
    const units: number[] = [];
    let response: string = '';
    const dictionary: Map<number, string> = new Map([
        [1, 'One'],
        [2, 'Two'],
        [3, 'Three'],
        [4, 'Four'],
        [5, 'Five'],
        [6, 'Six'],
        [7, 'Seven'],
        [8, 'Eight'],
        [9, 'Nine'],
        [10, 'Ten'],
        [11, 'Eleven'],
        [12, 'Twelve'],
        [13, 'Thirteen'],
        [14, 'Fourteen'],
        [15, 'Fifteen'],
        [16, 'Sixteen'],
        [17, 'Seventeen'],
        [18, 'Eighteen'],
        [19, 'Nineteen'],
        [20, 'Twenty'],
        [30, 'Thirty'],
        [40, 'Forty'],
        [50, 'Fifty'],
        [60, 'Sixty'],
        [70, 'Seventy'],
        [80, 'Eighty'],
        [90, 'Ninety']
    ]);
    
    while (num > 0) {
        units.push(num % 10);
        num = Math.floor(num / 10); 
    }
    
    if (units[2]) response += dictionary.get(units[2]) + ' Hundred';
    
    if (units[1] === 1) {
        units[0] += 10;
        units[1] = 0;
    }
    
    if (units[1]) {
        response += (response.length ? ' ' : '') + dictionary.get(units[1] * 10);
    }
    
    if (units[0]) {
        response += (response.length ? ' ' : '') + dictionary.get(units[0]);
    }
        
    return response;
}