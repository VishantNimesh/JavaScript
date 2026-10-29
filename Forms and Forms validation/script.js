
// Topic 1: Reading values from input, textarea, select.

// bina kuch pass kre bhi form mein form submit hojara hai to isko rokne ke liye hamko aana chaiye form validation.
// jese ki minimum 3 character ka naam hoskta hai or jese password 8 character se bda hona chaiye like that..

let naam = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault(); // js ka code badme chalta or form phle hee submit hojata bina koi valid value accept kre bhi. 
    // thats why prevent first before applying conditions..

    if(naam.value.length <= 2) {  // agar naam ki length 2 ya 2 se kam hai to show krdega else vps se none hojyega.
        document.querySelector("#hide").style.display = "initial";
    }  else {
        document.querySelector("#hide").style.display = "none";
    }

    // topic : custom regex
    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // ye terms and conditions likhi hui hai jisko match karte hue email likha jayega....
    // let ans = regex.test("harsh@test.com");
    // console.log(ans);

    const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
    let ans = regex.test("bishant_naman"); 
        console.log(ans);
});























