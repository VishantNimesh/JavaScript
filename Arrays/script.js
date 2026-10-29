
// TOPIC : ARRAYS.....

// Topic : create array, access array using indexes and modify arrays.
let arr = [1,2,3,4];
let marks = [10, 40, 52, 37, 92];
marks[0];

// also like this
let arra = new Array();

// modify
arr[2] = 12;


// Topic : Array methods -> push, pop, shift, unshift, splice, slice, reverse, sort

let arr1 = [1, 2, 3, 4, 5];
arr1.push(7000); // end m jake add hoga 

arr1.pop(); // end ki value remove krdega
arr1.shift(); // ye start ki value htadega. 

arr1.unshift(0); // ye starting m add karta hai.

arr1.splice(2,1); // ye bich m se value remove karta hai (isme phela '2' index ko btara hai and '1' hai ki kitni value htani hai us index se.) 

// Or splice add bhi kar skta hai elements ko on particular index
// here '0' means ek bhi element remove nahi krna or uske baad jo likha vo jake add hojayenge us index se. 
arr1.splice(1, 0, 3, 6); // 0, 2, 3, 6, 4, 5


let newArray = arr1.slice(0, 3); // slice ye karta hai ki values htata hai orignal array m se or ek new Array banta hai.
// or isme start index include hota hai or ending index exclude.

let arr2 = [1, 2, 3, 4, 5, 6];
arr2.reverse(); // ye main array means orignal array ko hee change krega..

let arr3 = [11, 62, 3, 4, 25]; // arr3.sort(); itna krne pe bhi asscending order m sort hojata hai alphanumerically keval strings.
let sr = arr3.sort(function(a, b) {  // sort hamesha function accept karta hai jisme aapko 2 values leni hoti hai or uske naam kuch bhi rakh skte ho.
    // return a - b;  // a-b -> asscending order m sort hojayega.
    return b - a; // to ye descending order mein sort hoga.
});


// map, filter, reduce, find, some, every (intro level).
// sort, map, filter, reduce, find, some, every  -> ye sab ek function accept karte hai or kuch return karte hai.
let arr4 = [11, 62, 3, 4, 25, 66];

// arr4.forEach(function(val) {  // forEach jo hai vo array ke har ek element ke liye andar ka sara code chlayega bari bari se.
//     console.log(val+5);
// }); 


// 1.map aapko sirf tab use karna hai jab apko ek naya array banana hai pichle array ke data basis par.
// 2.jo naya array banega vo utne hee size ka hoga jisko aap use kroge as orignal array. (means 5 elements then newArray will also have 5 elements).

// 3. map dikhte k hee sath mann mein ek blank array bana liya karo.

let arr5 = [11, 62, 3, 4, 25];
let newarr = arr5.map(function(val) {
    return 12; // agar aap kuch return nahi kroge to vo 5 baar undefined array m put krdega byDefault.
});

let newArr = arr5.map(function(val) {
    if(val > 10) return val;
});

// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lgega.


// filter => filter ek naya array banata hai map ki trha... (And filter ky karta hai ki purane array m se kuch value lata hai new array m or kuch chorr deta hai.... {based on filteration})

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
let newA = arr6.filter(function(val) {
    if(val > 4) return true;  // jo true kroge vo values add hojayegi new filter array m aapke and jo false wo nahi..
});


// reduce => ek array se ek value pe laa dena (matlb array ko reduce krke output m single value pe aana..)

let arr7 = [1, 2, 3, 4, 5, 6];
let ans = arr7.reduce(function (accumulator, val) { // accumulator ka naam kuch bhi rakh skte ho or `0` jo value di hai vo isi ki hai or vo isko hamesha yaad rakhta hai.(matlb 0+1 = 1 to accumulator m 1 store hai register hogya hai vo)
    return accumulator + val; // return karne ke baad bhi accumulator m save hoga vo...
}, 0);

// And jo bhi value last m bachegi pura array khtam hone ke baad vo ans variable mein ajyegi.


let arr8 = [1, 2, 3, 1, 4, 5, 6];
let va = arr8.find(function (val) { // find ye karta hai ki jo bhi phela element hoga usko return krdega or store krega ek variable main.
    return val === 1;
});

let obj = [
    {id: 1, key: 1},
    {id: 2, key: 2},
    {id: 3, key: 1},
];
let van = obj.find(function (val) {
    return val.key === 1;
});


let arr9 = [10, 30, 32, 90];
let any = arr9.some(function(val) { // some true ya false m answer dega OR ese dega ki ek bhi value 85 se upar hai to true (it means only one value should satisfied the code.)
    return val > 85;
});


let arr10 = [10, 30, 32, 90];
let eve = arr10.every(function(val) { // kya tumhare sare bande 5 se bade hai to true nahi to false( ye sab elements ko check krta hai unlike 'some')
    return val > 15;
});




// TOPIC : Destructuring and Spread operator...

// Destructuring -> isme ye hota hai ki agr tum kuch elements bhar nikalna chate ho variable mein to nikal skte ho taki aapko "arr[0]" ye na likhna pade.
let arr11 = [1, 2, 3, 4, 5];
let [a, b, , c] = arr11; // a =1, b =2, c =4


// spread operator -> ye use hota hai array ko copy karne ke liye kyonki array ka refrence copy hota hai to usse bachen k liye we use spread operator.
let arr12 = [1,2,3,4,5,6,7,8,9];
// let newArr12 = arr12; // ye refrence copy karega.
let newArr12 = [...arr12];

// ...operator ko function m "rest operator" khete thee and Array mein spread operator.

let m = [1, 2];
let n = [3, 4];

let o = [...m, ...n];

// add "India" to the start of this array using spread:
let countries = ["USA", "UK"];
countries = ["India", ...countries];




// common confusion:
// splice() vs slice():-> splice() orignal array ko change krdega and slice apko new array deta hai orignal array m se values nikalkr.

// map() vs forEach() :-> map() aap tab use kroge jab apko ek new array chaiye AND forEach() tab jab bas apko ekbar travell krna ho array pe.


// .sort() with big blunder :
// [100, 20, 3].sort();  // agr .sort(0 krdiya numerical values pe to ek naya array hoga jisme "100","20","3" as a string hoga)

// par agar array m "characters" ya "strings" ho to aap .sort() se usko sort kar skte hai..










