const MissionCommander = require('./app/missionCommander');

const carlo = new MissionCommander('Carlo');
const daniel = new MissionCommander('Daniel');
const astaroth = new MissionCommander('Astaroth');

console.log(carlo.name);
console.log(daniel.name);
console.log(astaroth.name);
