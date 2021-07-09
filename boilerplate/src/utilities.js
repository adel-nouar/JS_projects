console.log('utilities.js');
const add = (a,b) => a + b;
const square = (x) => x * x;
const name = 'Coucou';
console.log("From my code");
console.log('New output');
export { add, square as default, name };


// publicPath: path.resolve(__dirname, "./boilerplate/public/scripts/")