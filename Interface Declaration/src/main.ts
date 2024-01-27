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

type str = string;
type num = number;
type bool = boolean;


interface car {
    readonly name: str,
    model: num | str,
    color?: str,
    needFix: bool,
}

let lanser: car = {
    name : 'shark',
    model: 2002,
    needFix: false
}

// lanser.name = 'krsh'; // Cannot assign to 'name' because it is a read-only property.

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

showInfo({name: 'bmw', model: 2022, needFix: true});



/* Interface Method And Parameters */
interface user {
    name: str;
    id: num;
    age: num;
    sayHello(): str; // method
    showInformation: () => str | num; // method by arrow
    sum: (n: num) => num
}

let info: user = {
    name: 'ashraf',
    id: 9919,
    age: 21.5,
    sayHello() {
        return `hello ${this.name}`
    },
    showInformation: () => {
        return `hello ${info.name} your age id ${info.age}`;
    },
    sum: (n: num) => {
        return n + 10
    }
}

console.log(info.name);
console.log(info.id);
console.log(info.age);
console.log(info.sayHello);
console.log(info.showInformation);
console.log(info.sum(2));