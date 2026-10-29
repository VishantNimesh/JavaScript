

// TOPIC 4- Event bubbling and Capturing

// 1. event bubbling
// jispe event aayega agar uspar listener nahi hua to humara event uske parent par listener dhundhega aur aisa karte karte upar ki taraf move karega.

// document.querySelector("#nav").addEventListener("click", function() {
//     alert("clicked");
// });

// idhar elert lga hai nav pe but agr hum button pe bhi click krenge to vo parent vala accept krlega or alert generate krdega...


// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets) {
//     // alert("clicked");

//     // dets.target.style.textDecoration = "line-through";  // ye ek tarika hai line-through lgane ka..

//     // nor class add krdenge hum lt vali jo css m likhi hai idhr 
//     // dets.target.classList.add("lt");  // ye lgadega sirf htayega nahi 

//     dets.target.classList.toggle("lt"); // ye lgayega agr nhi hai to or htadega agr lag rkha hai to.

// });


// Bubbling mein agr nested child ka event chlra hai or baki parent pe bhi event hai to vo sare chlenge kyonki bubbling me parent tak jata hai...

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log("button clicked");
// });

// c.addEventListener("click", function() {
//     console.log("c clicked");
// });

// b.addEventListener("click", function() {
//     console.log("b clicked");
// });

// a.addEventListener("click", function() {
//     console.log("a clicked");
// });

// kisi bhi event ko chlaoge apka listener chlega or vo jump karega parent pe..





// *jab bhi aap click karte ho ya koi bhi event raise karte ho to aapka jo event flow/prpogation 2 pahses mein chalta hai:

// phase 1: event top level element se niche ki taraf aayega
// phase 2: event raised element se parent ki taraf jayega.

// ** Aur Phle phase 1 hoti hai.**

// {important} hamesha phase 1 hee pehle hoti hai ya chalti hai par vo by-default off rheti hai, agar hum usey on karde to pahle phase 1 ka answer milega.




// 2.Event Capturing..  => it is just opposite to the bubbling.

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log("button clicked");
});

c.addEventListener("click", function() {
    console.log("c clicked");
});

b.addEventListener("click", function() {
    console.log("b clicked");
});

a.addEventListener("click", function() {
    console.log("a clicked");
}, true); // bas ye true likhna hota hai isse capture phase on hojata hai.. to ab btn click pe phle parent ka listener chelga uske baad bubbling hogi jo ki by-default on hee rheti hai.






