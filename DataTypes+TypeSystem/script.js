

// Topic : Data Types => (1) Primitives  (2) Refrence data type

// Primitive -> Aisi saari values jinko copy karne par tumhe ek real copy mil jaye.
// string, number, boolean, null, undefined, symbol, bigint

let a = 12;
let d = a; // easy copy in primitive data types
a = a+2;

// Reference -> Inko copy karne par real copy nahi milegi but apko reference milega parent ka.
// arrays [], objects {}, functions ()

let b = [1, 2, 3];
let c = b; // idhar refrence copy hua hai actual copy nahi (isme 'b' jo hai vo 'c' m gya hai ab 'c' change hoga to 'b' m bhi hoga.)

c.pop(); // example ye rha run krke dekhlo..


// Topic : primitive data types
// string, number, boolean, null, undefined, Symbol, bigint

// STRINGS :=>
// ' ' -> single quotes
// " " -> double quotes  // ye tarika hota hai strings bnane ke
// ` ` -> backticks

// NUMBERS :=>
    // 12
    // 12.3   // both are numbers

// BOOLEAN :=>
    // true and false me value
// let a = true;
// let b = false;

// NULL :=>
    // null ka matlb hai apne jaan boojh kar koi value nahi dii.
    // let selectedStudents = null;

//  UNDEFINED :=>
    // undefined ka matlb hai ki apne ek variable banaya or usey value nahi di to jo value by default mili wo hai undefined..
    // let x;

// SYMBOL :=>
    // future mein hum koi libraries use karenge abb is case mein unn libraries mein kai baar kuch fields hoti hai, 
    // jinse similar hum bhi bana dete hai or galti se hmari bnayi hui fields us library ki orignal fields ko change kar deta hai. 
    
    // unique imutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");  // when we compare (u1 === u2) it gives false bcz dono alag/unique symbol hai.
// symbol ka matlb inshort ye hai ki hum unique chije/value create kar skte hai or usko hum kahin rakh sakte hai as an identifier.


// BigINT :=>
    // ek int variable ki limit hoti hai ki vo kitni badi value store kar skta hai(9007199254740991).
// To isliye bigint ki jarurat padi hamko.
let y = 9007199254740991n;


// Reference type :=>
// arrays [], objects {}, functions ()

// inme refrence copy hota hai jo ki agr ek m change karne jaoge to dusre m bhi hoga.

// let p = [2, 3, 4];
// let q = p;

// q.pop();

// let r = {
//     name: "harsh",
// };
// let s = r;

// s.name = "harshita";



// Topic : Dynamic Typing -> js mein static typing nahi hai and 
// yaha par hai dynamic typing jiska matlab hai aap data ko change kar sakte ho kyonki yha par dynamic data types hai.

let m = 12;
m = true;
m = "vishant";
m = [1, 2, 3];
m = null;   // ek variable hota hai or uski value kisi m bhi change kar skte ho aap that is dyanamic data types and that's why js is DTyped.


// Topic : typeof quirks (e.g., typeof null === 'object')

// typeof null -> 'object'
// typeof NaN -> 'number'


// Topic : Type coercion (== vs ===)

// type coercion -> concept jismein apka ek type automatically convert hojayega.

// "5" + 1;  -> 51 (concatenation) 
// Agar ek bhi operand string niklgya to js ye manke chalti hai ki apko concat krana hai that's why ye number m change na hoke ek string banta hai.(+) ke case m bc iske 2 kaam hai add krna or concat mtlb jodna

// "5" - 1; -> 4 (subtraction bc {-} has only one job to subtract that's why)





// Topic : Truthy vs Falsy values

// 0, false, "", null, undefined, NaN, document.all -> all are false in js ( js ne ye mana hai)

// baki inke alawa koi bhi value Truthy hai means true hai vo.
if(-1) {
    // to ye -1 true ka kaam kregaa idhr bcz iska nature hai ye js ke according.
}




// COMMON CONFUSION
// *(i)* Why NaN is a number?
// ANS => NaN(not a number) js ise ek failed number ki trha treat krti hai isliye.

//  js kheti hai ki ye tha number hee bas ye failed hogya hai isliye NaN bolre hai.

// NaN ek failed number of operation hai uski vjha se .



// *(ii)* undefined vs null

// variable ke liye undefined by default assign hota hai or null hum khudse krte hai mtlb manually.

// *(iii)* "5" + 1 || "5" - 1

