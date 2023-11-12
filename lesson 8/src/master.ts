




let message = true

function info(name: string, age: number, salary: number): string {
    const hello = 100;
    if(message){
        return `my name is ${name}, my age is ${age}, my salary is ${salary}, test variabble ${hello}`;
    }
    return `no data found`
}

console.log(info('ashraf', 40, 5000));