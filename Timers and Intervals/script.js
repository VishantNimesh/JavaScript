
// Timers and Intervals

// Topic 1: setTimeout, setInterval

// setTimeout(function(){  // ekbar chalta hai bas
//     console.log("hello");
// }, 5000);


// setInterval(function(){  // or ye baar baar chlega.
//     console.log("Hy how are you");
// }, 5000);


// Topic 2: clearTimeout, clearInterval

let tm = setTimeout(function(){ 
    console.log("hello");
}, 3000);

clearTimeout(tm);

let msg = setInterval(function() { 
    console.log("SuryaNamaskar");
}, 3000);


clearInterval(msg);


// kuch bnate hai iske through

let count = 10;

let interval = setInterval(function() {
    if(count >= 0) {
        console.log(count);
        count--;
    } else clearInterval(interval);
}, 1000);



// ye mera tarika tha 10 se 0 tak 1 sec ke gap m print krne ka

// setInterval(function() {
//     if(count < 0) return;
//     console.log(count);
//     count--;
// }, 1000);









