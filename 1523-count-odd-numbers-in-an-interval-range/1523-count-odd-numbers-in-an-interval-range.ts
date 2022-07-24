function countOdds(low: number, high: number): number {

    let response: number = Math.round((high - low + (low % 2 !== 0 ? 1 : 0)) / 2);
    
    return response;
};