
// Approach

// hum eventListener jo lgayenge vo window pw lgayenge {keydown}

// window.addEventListener("keydown", function(dets) {
//     // console.log(dets); // key mein j mila jb screen pe mne j type kra (key : j)like this
//     console.log(dets.key);
// });


let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(dets) { // window pe keyboard se jo bhi type kroge vo key name show hoga.
    if(dets.key === " ") {
        h1.textContent = "spc";
    } else {
        h1.textContent = dets.key;
    }
});










