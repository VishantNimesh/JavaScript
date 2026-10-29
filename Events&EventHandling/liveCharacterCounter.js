

// Live character counter banana hai

let inp = document.querySelector("input");
let spn = document.querySelector("span");

inp.addEventListener("input", function(dets) {
    // console.log(inp.value.length);

    // spn.textContent = inp.value.length; // total count krne ke liye

    // or ab uske liye ki aap kitne character type krskte ho or agr -ve number hojaye to usko red color se dikhado like -1, -2...

    let left = 20 - inp.value.length;
    spn.textContent = left;

    if(left < 0) {
        spn.style.color = "red";
    } else {
        spn.style.color = "black";
    }
});






// Confussion .........

// Q1: Events VS Listener.
// answer :-> jab humne addEventListener lgaya hai or usme pheli chijj "click" likhi hai to vo Event hai 
//          or uske baad jo function m likha hai vo aapka listener hai basically. we can say tht complete thing is a listener but the function is the action step.
//  matlb ki jab click hoga to function chlega. "click" pe action step hoga.













