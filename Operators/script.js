
//Operators :

const { startTransition } = require("react");

// Types are : Airthmetic, comparison, logical, assignment, unary, ternary

// + - / * % **
// 1 + 2 = 3 -> addition in numbers
// "ha" + "rsh" = " harsh" -> concatination in strings

// 2 ** 3 = 8 -> power 

// comparison
// == only check the value not type 
// 12 == "12" -> true => not strict comparison
// === this can check both => strict comparison
// 12 === "12" -> false

// 12 != 13 -> true -> not strict
// 12 != "12" -> false

// !== -> strict comparison
// 12 !== "12" -> true

// > , <, >=, <= 


// Logical : &&, ||, !

// unary operator
// +  -  !  typeof  ++  --
// +"10" -> 10(number mein) jo convert hoskta hai vo hojayega number mein.
// +"harsh" -> NaN

// 5 hai usko negate krna hai to uske samne bas - lgado => -(5) --> -5

// !12 -> false ( 12 is a truthy type so uska ulta kardiya )



// Ternary operator : ? :

// condition ? true hui ka code : false hui ka code

12 > 13 ? console.log("true") : console.log("false");


// typeof and instanceof

// typeof null -> object deta hai jo ki glat hai and
// typeof [] -> object deta jo ki glat hai ye array hai.
// typeof Nan -> number aata hai.


// let a = [];
// a instanceof Array -> true.

// let b = {};
// b instanceof Object -> true.
// b instanceof Array -> false.

// instanceof works only with refrence values not with primitive(primitive values works well with "typeof")












//                   ###### Topic => CONTROL FLOW ########


// if else else-if
// switch case

switch(3) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("heyhey");
        break;
        default:
}


// early return pattern

function getVal(val) {
    if(val < 25) return 'D';
    else if(val < 50) return 'C';
    else if(val < 75) return 'B';
    else return 'A';
}

console.log(getVal(89));


//      ############ Topic : Loops ###########

// for, while, do-while, for-each, forin, forof

// kaha se jana hai -> kaha tak jana hai -> or kaise jana hai  {tab tab for loop use hoga}.

for(let i = 1; i < 101; i++) {
    console.log(i);
}


// kaha se jana hai -> kabb rukna hai -> kaise jana hai {tab tab while loop use hoga}.

let i = 1;
while(i < 32) {
    //code
    console.log(i);
    i++;
}

let p = 1;
do{
    console.log(p);
    i++;
} while(i < 21);




let val = prompt("give a number"); //=> user se ese number lete hai input basically

for(let i = 1; i <= val; i++) {
    if(i%2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}













