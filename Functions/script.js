
// Functions : what? why? how?

// function ko jab call kreinge tab hee chlega unlike other code.

// how to make a function step : 1 (Function declaration) function statements
// function lolo() {
//     console.log("Happy New Year");
// };

// lolo();

// 2nd way (Function expression)
// let fnc = function() {  // function ke aage func ka naam nahi likhna hai kyonki "variable" hee func ka naam hai.
//     console.log("hey hey there you go");
// };

// fnc();


// Topic : fat arrow function
let fnc = ()=> {
    console.log("hey hey there you go miles away");
};
fnc();


// Topic : Parameters & Arguments
function dance(v1) {
    console.log(`${v1} naach raha hai`);
};

dance("ghoda");
dance("hiran");
dance("cheel ka moot");
dance("lakadbaggha");


// function add(v1, v2) {
//     console.log(v1 + v2);
// };

// add(1, 2);
// add(10, 20);

// Topic : Default, rest and spread parameters.
// default
// function add(v1 = 0, v2 = 0) {
//     console.log(v1 + v2);  // undefined + undefined(jab ayega jab aap values na do call krte wakt) -> ye jud hee nahi sakta isliye NaN output aata hai (or isse bachne k liye default parameter set krdete hai hum).
// };

// add();

// Rest & spread parameter ->{jab arguments bhoot saare ho to humein utne hee parameters banane padenge, issey bachne ke liye, hum "rest" ka use karte hai ...(agar ... function ke parameter space mein lage to wo rest operator hai. AND agar wo array and objects mein lage to wo spread operator hai)}
// function abcd(a, b, c, d, e, f, g, h, i, j) { // ye isko hum ese kr skte hai niche dekho
function abcd(...val) { 
    console.log(val);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abc(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abc(1, 2, 3, 4, 5, 6);



// Topic : Return values and early return.
// return matlb jaha se aaye ho wahi daal denge
function abcd() {
    return 12;
}


let value = abcd();
console.log(value);

// Topic : First class functions -> functions ko values ki trha treat kar satke hai.{aap jhan jhan values likh sakte ho vha vha function likh sakte ho}

function abcde(val) {
    val();
}

abcde(function() {
    console.log("hey")
});


// Topic : Higher order function -> hof wo function hotahai jo ki return kare ek function ya fir accept kare ek func apne parameter mein.

function xyz(val) { // so this xyz func accept a func that's why it is HOFunc.

}
xyz(function() {

}); 

// example 2:
function cbz(val) {
    return function() {
        console.log("My name is Hindustan")
    }
}
cbz()(); // phela bracket cbz func ko chlane k liye and 2nd for return m jo aaya vo func chlane ko.



// Topic : Pure vs impure functions
// aisa func jo ki bahar ki value ko naa badle wo hai pure function

let a = 12;
function ab() { // pure function
    console.log("Hii iam doremon");
}


// or aise func jo bahar ki value ko badal de wo hai impure funnctions.
function hui() { // impure function value change hojayegi
    a++;
}


// Topic : Closures and lexical scoping

// closures -> Ek func jo return kare ek aur function aur return hone wala function hamesha use karega parent func ka koi variable.

function abp() { // this whole is a closure
    let a = 12;
    return function() {
        console.log(a);
    }
};

// lexical scoping -> unki physical position ka scope kya hai.
function pqr() {
    let a = 12;
    function stu() {
        let b = 13;  // b ko sirf stu ke andar use kar skte hai Na hee iske upar or na hee iske niche kahin.
        function vwx() {
            let c = 14;
        }
    }
}


// Topic : IIFE(Immediately Invoked Function Expressions)

(function() { // function bnao naam mat do or circular bracket se band krdo or call kardo turant.
    console.log("call ho chuka hai ye ");
})();


// Topic : Hoisting differences b/w declaration and expression.

runBeforeDeclare(); // hoisting in funtion declaration/statement but not in function expression. it gives an error.



function runBeforeDeclare() {
    console.log("hi hi hi");
}


// run(); // gives error that (run is not defined)




// let zudio = function run() {
//     console.log(" ye nahi chalega");
// }









// Practice Questions :
// agr koi function kuch bhi return nhi krra hai to vo undefined hoga.


// Question 2: what does it mean when we say "function are first-class citizens"?
// ANswer : function bilkul value ki trha use hoskte hai.

function af(val) {
    val();
}
af(function()  {
    console.log("hey");
});



// Question : tell me output 
function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // -> 1
counter(); // -> 2


// Question 3: what is the use of IIFE? name one real-world use case.
let shery = (function () {
    let score = 0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        },
    };
})();



// PRACTICE SESSION :
// Write a code of BMI calculator

function bmi(weight, height) {
    return weight / (height * height); 
}

console.log(bmi(65, 1.7).toFixed(2)); // .toFixed(2) matlb kitni precise value chaiye decimal ke baad kitni values chaiye vo.



// Question 2: Create a reusable discount calculator(HOF -> higher order func)

function discountCalculator(discount) {
    return function(price) {
        return (price - price *(discount / 100));
    };
}

let ten = discountCalculator(10);
let tweenty = discountCalculator(20);

console.log(ten(1200));
console.log(tweenty(1200));


// Question 3: Build a counter using closure

function counterNum() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let c = counterNum(); 
console.log(c());
console.log(c());
console.log(c());

let d = counterNum(); // vaps se count zero(0) kardega
console.log(d());


// Question 4 : create a pure function to transform a value.
function double(val) {
    return val * 2;
}
console.log(double(15));


// Question 4 : Use IIFE to isolate variables

(function() {
    const password = "secret password";
    console.log(password);
})();

//  console.log(password); // isko bhar access nahi kar sakte error dega ki password not defined.


// Common Confusions ???
// 1: arrow vs regular function : this context
// Answer -> jab bhi aap functions bnare ho to arrow functions bana sakte ho koi problem nahi, sirf ek jgha ke objects ke andr arrow function "this keyword"  value ko (loose)kho deta hai.

// 2: function ki hoisting kab hoti hai and TDZ ka ky impact aata hai uspr.
// greet();
// function greet() {}; // -> works, perform hoisting

// greet();
// const greet = ()=> {}; // -> error 
// // function keyword use karne ki jgha ek fat arrow bnaya hai jo ki as a function expression bnaya hai.


// 3: closures and high order function m ky diff hai?

// Answer :=> closure bhi or HOF bhi dono ek function return karte hai, bas closure m return vala function uske parent function ka variable use karta hai as a return variable m.











