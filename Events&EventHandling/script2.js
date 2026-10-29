
// Topic 2: Common events: click, input, change, submit, mouseover, keyup.

// 1. click
let p = document.querySelector("p");
p.addEventListener("click", function() {
    p.style.color = "red";
});


// 2. input - ye ek event hai jo listener m diya jata hai or inp ek variable hai sirf.

// let inp = document.querySelector("input");
// inp.addEventListener("input", function() {
//     console.log("typed");
// });

// input data type krne k liye data field hota hai
// jo bhi m input m likhunga vo merko console pe chaiye jese ki mne input kra "vishant" to console pe bhi ek ek letter print hoga.

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(evt) { // function ke andar kuch bhi likh sakte ho.
//     console.log(evt.data);  // agr backspace krte hai to data m null aata hai or vo he print hoga
// });

// so, null print na ho usko htane ke liye upar vale code m sirf ek condition lgayenge

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(details) {
//     if(details.data !== null) {
//         console.log(details.data);
//     }
// });




// 3. change event
// -> change event tab chalta hai jab aapko koi input select ya textarea me koi change hojaye.

// let sel = document.querySelector("select");

// sel.addEventListener("change", function(dets) {
//     // console.log(dets); // find krliya value kidhr milri hai jo select kra \
//     console.log(dets.target.value); // so ye target ke andar ek field mila value name ka uske andar tha apple select jo kiya thA.
// });


//  --> ab agr jo heading me likha usko change krke likhna ho kuch bhi to ese krenge

let sel = document.querySelector("select"); // option m value ="" honi jruri hai vrna aage naam likh ke nahi aayega..
let  device = document.querySelector("#device");
sel.addEventListener("change", function(dets) {
    device.textContent = `${dets.target.value} Device Selected`; // textContent change krre
    // console.log(dets.target.value);
});




// 4. submit event {jab bhi form submit hora hai to aapko kuch karwana hai}

// form ko submit hone se rokna hai phle{preventdefault} kyonki submit hote hee page reload ya refresh hota jisse ki sare changes hat jate hai form mein se.
// let form = document.querySelector("form");
// form.addEventListener("submit", function(dets) {
//     dets.preventDefault(); 
// });


// we want all the inputs and their answers..
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

let main = document.querySelector("#main"); // main ke andar sab dalenge tabhi chlega menas card banega

form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // reload nhi hone dega. or hmare inputs m jo data likha vo humein mil payega.
    
    // console.log(inputs); // ye btayega ki kitne elements hai as like an array
    // console.log(
    //     inputs[0].value,
    //     inputs[1].value,
    //     inputs[2].value,
    //     inputs[3].value
    // );   // ye kuch nahi hai bas form m jo feild likha hai uski value ko console pe print krane ke liye after submit.


    // card create krre hai dinamically. 

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    // img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1715876267889-e77e08907a25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    // h3.textContent = "Kiara Advani";
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    // h5.textContent = "A girl with black hair and red top"
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    // p.textContent = "A girl is from mumbai she came to noida to become software engineer. 
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card); // that is it ab submit krne pe card banke aayega , and ab real time pe jo data form me doge vo card banke aayega to content m change krna hoga upar.

    inputs.forEach(function(inp) { // ye isliye inputs feild ki jo value di hai ekbar vo submit krte hee hat jaye. taki dusri entry daal ske.
        if(inp.type != "submit") {
            inp.value = "";
        }
    });   



});















