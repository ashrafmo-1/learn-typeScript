/*
    Interface
    - Interface Declaration
    --- Serve Like Types
    --- The Interface Describes The Shape Of An Object
    --- It Defines The Syntax To Follow

    --- Use With Object
    --- Use With Function
    --- Use Read Only And Optional Operator
*/

interface car {
    name: string,
    model: number | string,
    color: string,
    needFix: boolean,
}

let lanser: car = {
    name: 'shark',
    model: 2002,
    color: 'white and blue',
    needFix: false
}

console.log(lanser.name);
console.log(lanser.model);
console.log(lanser.color);
console.log(lanser.needFix);



function showInfo(info: car) {
    console.log(`car name is ${info.name}`);
    console.log(info.model);
    console.log(info.color);
    console.log(info.needFix);
}

showInfo({name: 'bmw', model: 2022, color: 'red', needFix: true});