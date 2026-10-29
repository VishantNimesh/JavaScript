
// Variables : var, let and const

// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 12;  // All are posible to create a variable.


// Topic : declarations and initialization.

// var a; // declaration karna 
// var a = 12; // declare and initialize -> means only give first vale called intialize.

// let b;
// let b = 15;



// var a = 12;    // jab bhi var keyword se variable bnate hai vo Window mein add hota hai

// Ye hamesha Function scoped hota hai var.
// aap firse declare kar sakte ho same name se and error nahi ayega.
// var b = 12;
// var b = 13; 


// let b = 12;
// let b = 13; // par let esa nahi karta ye error dega same variable firse declare hoga to.

// const dulha = "Laby"; // ye constant hee rheta hai throught the code ye change nahi hoga kabhi.


// function abcd() {
//     if(true) {
//         var a = 12; // this variable can used in entire function unlike other languages. if ke andr hai to vahi tk use hoga bas ese ..
//     }
// }



// Scope (global, block, functional) 
//  var a = 12; // -> global scope

// {
//     var b = 134; // -> var not support bloc scoped so this can be used in all code just like global (bcz var follows only functional scope).
// }                // but jab ye code chlega to function ke andar jata hai sara esaa smjho jese js khud krti ho. to ye block ke andr vala sab jgha chlega pure code mein.

// let and const are block scoped


// Topic : Reassignment, Redeclaration

// var a = 12;
// a = 32; // reassignment

// var a = 233;

// let b = 12;
// b = 32;

// let b = 54; // this can give error bcz let can't be Redeclare.



// topic : Temporal Dead Zone => utna area hai jitna me js ko pta to hai ki variable exist krta hai par wo apko value nahi de skta.

console.log(a); // gives error can not access 'a' before initialization. ( par javascript ko pta hai ki line 71 pe a initialize hua hai..)

let a = 15;

// temporal dead zone [let m hota hai const m hota hai] or basicaly hota hai ki us variable se upar ki jitni bhi line/jgha ko TDZone bolte hai.
// But var mein nahi hota hai ye...


// Topic : Hoisting impact per type

// HOISTING => Ek variable ko jab js mein banate h to wo variable Do(2) hisso mein toot jata hai and uska declare part upar chla jata hai and uska initialization part neeche reh jata hai.


var c = 12;

var c = undefined; // ye sabse upar chla jata hai declare part or isi ke karan jab console.log(c) karte hai tab undifined aata hai error var me..
c = 12; // or y niche hee rheta h..

// Hoisting hota sab mein hai {var, let and const} bcz tabhi vo TDZ m jata hai ki error bolta hai cant give a value before initialization...












