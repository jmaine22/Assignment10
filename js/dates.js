//STEP 1
// let daysInMonth = (month, year) => {
//     return new Date(year, month, 0).getDate();
// }
// console.log(daysInMonth(2, 2021));
//STEP 2
// let monthsByDate = (dt) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return months[dt.getMonth()];
// };
// console.log(monthsByDate(new Date("02/15/2021")));
//STEP 3
// let weekendByDate = (dt) => {
//     let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return weekday[dt.getDay()];
// };
// console.log(weekendByDate(new Date("02/20/2021")));
//STEP 4
// let yestdayDate = new Date();
// yestdayDate.setDate(yestdayDate.getDate() - 1);
// console.log(yestdayDate);
//STEP 5
let currentDay = new Date();
currentDay.getDay();
console.log(currentDay);