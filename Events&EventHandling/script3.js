

// 4.mouseover event  & mouseout

// let abcd = document.querySelector("#pvc");

// abcd.addEventListener("mouseover", function() {
//     abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function() {
//     abcd.style.backgroundColor = "red";
// });


// Now study about mousemove event
let pvc = document.querySelector("#pvc");

window.addEventListener("mousemove", function(dets) {
    // console.log(dets.clientX, dets.clientY);

    pvc.style.top = dets.clientY + "px";
    pvc.style.left = dets.clientX + "px";
});






















