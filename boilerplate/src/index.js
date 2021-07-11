// Test rest parameters
const calculateAverage = (thing, ...numbers) => {
    // return (num1 + num2) / 2;
    let sum = 0;
    numbers.forEach((num) => sum += sum);
    const average = sum/numbers.length;
    return `The average ${thing} is ${average}`;
}

console.log(calculateAverage('grade',0,100));

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players}`);
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');