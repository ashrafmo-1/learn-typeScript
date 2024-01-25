"use strict";
const levelOne = 1000;
const levelTwo = 2000;
const levelThree = 3000;
const levelFOur = 4000;
var lvl;
(function (lvl) {
    lvl[lvl["levelOne"] = 1000] = "levelOne";
    lvl[lvl["levelTwo"] = 2000] = "levelTwo";
    lvl[lvl["levelThree"] = 3000] = "levelThree";
    lvl[lvl["levelFOre"] = 4000] = "levelFOre";
})(lvl || (lvl = {}));
let level = 'levelFOre';
if (level === 'levelOne') {
    console.log(`your level is ${level} because you have a ${lvl.levelOne}`);
}
else if (level === 'levelTwo') {
    console.log(`your level is ${level} because you have a ${lvl.levelTwo}`);
}
else if (level === 'levelThree') {
    console.log(`your level is ${level} because you have a ${lvl.levelThree}`);
}
else {
    console.log(`your level is ${level} because you have a ${lvl.levelFOre}`);
}
