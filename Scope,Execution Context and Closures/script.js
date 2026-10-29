
// =================== Topic 1 = Scoping =============

// Scope -> scope hai ke aap apne created variables and functions kaha tak yuse kar sakte ho...

// Types are: functional scope, global scope and block scope

// functional scope - function ke andar hee use ho sakti hai.
// global scope -  puure code mein kahi bhi use ho sakti hai.
// block scope - {} curly braces mein hee use ho sakti hai.

// function abcd() {
//     var a = 12;
// }
// console.log(a);  // throug an error like variable a is not defined

var b = 35;  // this is global scope
// agar aapka code ksii bhi {} curly braces ke andar nahi hai to aapka code global hai

{
    var c = 45; // this is block scope.
}


// =========== Topic 2 = Execution context =============== Abstract hai ye (ek hypothetical scenario hai)

// js sabse phele jaise hee aapka function dekhta hai, sabse phele js bnata hai execution context,
//  ye ek process hai jo ki do(2) different phases mein chalta hai,
// memory phase and doosre ka naam hai execution phase.

function xyz() {
    var x = 2;
    let y = 34;

    // .......code
}


// ye esa manlo ek box hai execution context,
// or usme jo bhi apne function likha hai usme jo bhi variables hai vo sab us box m memory lengee,
// And uske baad usi box m execution hoga us function code ka.
// Or isi pure box ko execution context bolte hai.



// ================ Topic 3 = Lexical scope vs dynamic scope ==============

// js - lexical scoping (js mein lexical scoping hee chalti hai).
// lexical scoping kheti hai ki aap kaha par physically available ho,
// ye puri tarike se depend karta hai ki aap kya access kar paoge. 

// function pyq() {
//     let a = 12; // ye variable physically pyq function ke andar hai or ye physically yahi pure pyq function me use ho sakta hai only.
//     function def() {
//         console.log(a); // accessable
//     }
// }

// dynamic scoping Js me exist nahi karti hai
// dynamic scoping -> kaha se call kar rahe ho uspe depend karega ki ky value milegi

// Example :-

// let p = 12;

// function abcd() {
//     console.log(p); // ye 12 print krega kyonki lexical scoping hai. (12 global present h isliye agr abcd funtion m present hota to vo print hota).
// }

// function defg() {
//     let p = 13;
//     abcd();   // agr dynamic scoping hoti js to idhr 13 print hota.
// }
// defg();


// ========== Topic 4: Closure defination and how variables are preserved =================

// closures hote hai functions jo ki kisi parent function ke andar ho,
// aur andar wala function return ho rha ho, and returning funtion use kare,
// parent function ka koi variable..

// function parent() {
//     let value = 12;
//     return function() {
//         console.log(value);
//     };
// }

// how variables are preserved 

function parent() {
    let value = 12;
    return function() { // jab ye function return hua to parent function khtam hogya to variable bhi khtm hogya to fir 12 print kese hua..?
        console.log(value);
    };
}
let fnc = parent();
fnc();

// ye sach hai ki function ke khtam hone pe aapka func and uske variables khtam hojate hai,
// par jab bhi closures banta hai to aapka func or uske variables ka ek backlink banaya jaata hai,
// or uska naam hota hai [[environment]]


// ============== Topic 5=> Use cases: private counters, encapsulation ======

// private counter

function countForMe() {
    let c = 0; // ye privte variable banchuka hai
    return function() {
        c++;
        console.log(c);
    };
}
// countForMe();  // ese kuch nhi milega output mein kyonki closure m pheli baar m sunction return hota hai pura ka pura.

let fnc1 = countForMe(); // iske pass apna khudka 'c' hoga count func chlne ke baad..
fnc1(); // print 1 now..
fnc1(); // 2
fnc1(); // 3....so on

let fnc2 = countForMe(); // apna khudka 'c' hoga is function ke pass (c= 0,1,2,3,4,5,6)
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();  // gives 6.....



// Encapsulation : main inner logic hide krlena or vo chije dena jiski apko jarurat hai bs
// encapsulation ko achive krne k liye closure use hoga..

function clickTimer() {
    let click = 0; // ye ek private variable banchuka hai iski value bhar se change nhi kar skte..
    return function() {
        if(click < 5) {
            click++;
            console.log(`clicked : ${click} times`);
        } else {
            console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME.");
        }
    };
}

let func = clickTimer();
func();
func();
func();
func();
func();
func(); // it throws an error.









