// Unix Epoch - January 1st 1970 00:00:00


const now = new Date();
const timeStamp = now.getTime();

const myDate = new Date(timeStamp)

console.log(now.toString());
console.log(myDate.toString());

// console.log(`Year: ${now.getUTCFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of Month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Second: ${now.getSeconds()}`);

const dateOne = new Date('March 1 2018 12:00:000');
const dateTwo = new Date();

const dateOneTimeStamp = dateOne.getTime();











// ------------ WITH MOMENT ------------------
// const now = moment();
// console.log(now.toString());
// // now.minute(1)
// now.add(1, 'year').subtract(20, 'days');
// // Novembre 3rd, 2003
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())


// 1. Create a new Moment
const birthday = moment();
// 2. Set the month, day, and year to your birthday
birthday.year(1979).month(0).date(30);

// 3. Use format to print it in the following way Jan 6, 1991
console.log(birthday.format('MMM D, YYYY'));