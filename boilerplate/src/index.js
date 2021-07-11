const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players}`);
}

const team = {
    name: 'Liberty', 
    coach: 'Casey Penn', 
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

console.log("With Rest parameters");
printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');

console.log("With spread syntax parameters");
printTeam(team.name, team.coach, ...team.players);


const cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
const citiesCopy = [...cities] // Copy cities to citiesCopy (each element is copied)