//STEP 1
// let alphaOrder = (word) => {
//     let words = word.split('');
//     let word1 = words.sort();
//     console.log(word1);
// }
// alphaOrder("music");
//STEP 2
// let upperfirstLetter = (words) => {
//     let newWords = words.split(' ');
//     let x;
//     let txt = " ";
//     for (x in newWords) {
//         txt += newWords[x].charAt(0).toUpperCase() + newWords[x].slice(1) + " ";
//         console.log(txt);
//     }
// }
// upperfirstLetter("the new javascript course is here right now");
//STEP 3
// let vowelCounter = (words) => {
//     const count = words.match(/[aeiou]/gi).length;
//     console.log(count);
// }
// vowelCounter("The quick brown fox");
//STEP 4
// let strID = () => {
//     let x = Math.random().toString(36).slice(2);
//     console.log(x);
// }
// strID();
//STEP 5
// let countries = (wCountries) => {
//     let newArray = wCountries;
//     return newArray.sort((x,y) => y.length - x.length);
//     //console.log(newArray);
// }
// console.log(countries(["Australia", "Germany", "United States of America"]));