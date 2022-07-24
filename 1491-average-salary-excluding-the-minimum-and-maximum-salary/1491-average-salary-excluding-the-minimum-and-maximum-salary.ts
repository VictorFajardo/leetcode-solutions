function average(salary: number[]): number {
    salary.sort((a, b) => a - b);
    const n = salary.length;
    let sum: number = 0;
    
    for (let i = 1; i < n - 1; i++) {
        sum += salary[i];
    }
    
    return sum / (n - 2);

};