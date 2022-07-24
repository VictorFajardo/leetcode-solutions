function countOdds(low: number, high: number): number {

    let response: number = Math.floor((high - low + 1) / 2);
    
    response += (low % 2 !== 0 && high % 2 !== 0) ? 1 : 0;
    
    return response;
};