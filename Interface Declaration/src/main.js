"use strict";
let lanser = {
    name: 'shark',
    model: 2002,
    color: 'white and blue',
    needFix: false
};
console.log(lanser.name);
console.log(lanser.model);
console.log(lanser.color);
console.log(lanser.needFix);
function showInfo(info) {
    console.log(`car name is ${info.name}`);
    console.log(info.model);
    console.log(info.color);
    console.log(info.needFix);
}
showInfo({ name: 'bmw', model: 2022, color: 'red', needFix: true });
