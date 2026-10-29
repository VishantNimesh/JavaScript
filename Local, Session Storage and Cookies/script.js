

// localStorage -> aapke browser ke andar data store karna
//  jo ki browser band hone par bhi delete nahi hoga.

// sessionStorage -> ye aapka data temporarily store krta hai 
// matlab ki tab band krne par data gayab hojayega.

// cookies -> ye bhi data store karta hai and apka data browser ke cookies naam ki property mein save hota hai
// and ye cookie concept kamm data ya light(halka) data ke liye hota hai.



// 1. Local Storage =>
// store kaise kare - setItem
// data fetch kese kare - getItem
// remove kaise kare - removeItem
// update kaise kare - setItem


// store kaise kare
localStorage.setItem("name", "harsh"); 
// game ye hai ki aap localStorage m jo bhi value rakhoge vo store rhayegi hamesha heee..
// jabtk aap usko khud remove na kro.


// data fetch kese kare
let val = localStorage.getItem("name");


// remove kaise kare
localStorage.removeItem("name");

// update kaise kare 
localStorage.setItem("name", "vishant");

// clear
// localStorage.clear();


// 2. sessionStorage
// store kaise kare - setItem
// data fetch kese kare - getItem
// remove kaise kare - removeItem
// update kaise kare - setItem

sessionStorage.setItem("name", "Nimesh"); 
// temporarly data store krne k liye use krte hai.
// jese ki koi value chaiye jo ki bas tab open rhne tak chaiye badme hatjaye tab band krne par.




// 3. cookies
// browser mein chota data store karne ke liye cookies ka istemaal hota hai
//  nearly ~ 4kb

// Or localStorage & sessionStorage mein ~ 5Mb

// cookies mein jo bhi data store karoge vo data page reload hone par automatically server par jayega..

document.cookie = "email=harsh@test.com";
document.cookie = "age=26";



// localStorage sirf string store karta hai uske alawa nahi for ex:
// localStorage.setItem("friends", ["aakash", "naman", "ujjwal"]); // isme string type me store hoga .
// localStorage.setItem("dost", {one: "aakash", two: "sumit"}); // isme object object likha ajyega naam ki jgha.


// hum ye array ke usme or objects ke ya alg type me store kar skte hai 
// bas hamko madad leni pdegi JSON.stringify().
// jo ki ye array ko ya object ko string m convert kar dega or localStore store hee string krta hai then winwin.

localStorage.setItem("friend", JSON.stringify(["akash", "ujjwal", "vishant"]));


// Note: localStorage mein array vgera store nahi kar skte hai isliye unko string bnake store krte hai.
// jab localStorage se data vapis nikalte hai to string milta hai.
// Ab string se use orignal form mein lane k liye JSON.parse() kardete hai..
// string uthake parse ke andar daldo bs...

// JSON.parse("string");








