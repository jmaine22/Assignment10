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
let vowelCounter = (words) => {
    let sentence = words.split(' ');
    let vowel = ["a","u","i","o","e"];
    let counter = 0;
    let word;
    let txt = " ";
    for (word in sentence) {
        txt += sentence[word] + " ";
         console.log(txt);
        console.log(counter);
    }
}
vowelCounter("The quick brown fox");
//STEP 4

//STEP 5
