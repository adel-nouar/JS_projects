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


// Spread object operator
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}
let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}
newHouse.yearBuilt = 2018;

console.log(house);
console.log(newHouse);

const person = {
    name: 'Andy',
    age: 27
}
const location = {
    city: 'London',
    country: 'UK'
}
const overview = {
    ...person,
    ...location
}
console.log(overview);