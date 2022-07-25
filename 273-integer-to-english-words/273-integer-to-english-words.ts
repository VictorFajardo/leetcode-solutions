function numberToWords(num: number): string {
    if (!num) return 'Zero'
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
        
    const units: number[] = [];
    let response: string = '';
    
    while (num > 0) {
        units.push(num % 1000);
        num = Math.floor(num / 1000); 
    }
    
    if (units[3]) response += digitToString(units[3], dictionary) + ' Billion';
    if (units[2]) response += (response.length ? ' ' : '') + digitToString(units[2], dictionary) + ' Million';
    if (units[1]) response += (response.length ? ' ' : '') + digitToString(units[1], dictionary) + ' Thousand';
    if (units[0]) response += (response.length ? ' ' : '') + digitToString(units[0], dictionary);
    
    return response;

};

function digitToString(num: number, dictionary: Map<number, string>): string {
    const units: number[] = [];
    let response: string = '';
    
    while (num > 0) {
        units.push(num % 10);
        num = Math.floor(num / 10); 
    }
    
    if (units[2]) response += dictionary.get(units[2]) + ' Hundred';
    
    if (units[1] === 1 && units[0] !== 0) {
        response += (response.length ? ' ' : '') + dictionary.get(10 + units[0]);
    } else {
        if (units[1]) {
            response += (response.length ? ' ' : '') + dictionary.get(units[1] * 10);
        }
        if (units[0]) {
            response += (response.length ? ' ' : '') + dictionary.get(units[0]);
        }
    }
        
    return response;
}