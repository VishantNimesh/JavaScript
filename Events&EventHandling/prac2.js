


let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function() { // custom button pe click krne se type input file jo bnaya tha uspe hoga.
    fileinp.click();
});


fileinp.addEventListener("change", function(dets) {
    // console.log(dets);
    // console.log(dets.target.files[0].name);

    // btn.textContent = dets.target.files[0].name; // mere m to error nhi aara tha select krke czncel krne m but fir bhi or part
    // OR
    const file = dets.target.files[0].name;
    if(file) {
        btn.textContent = file;
    }
});













