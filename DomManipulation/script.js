
// Topic : DOM Manipulation

// DOM -> pura html jo hai usme har ek chij node hoti hai for ex: html tag usme head and body node hai or body m agr div bnado to vo node hai
// To DOM jo apka pura webPage hai jo dikhra hia vo DOM hai usme image dom h, h1 tag dom hai , ul tag bhi dom hai...

// DOM Manipulation :=> DoM me changes krna hee 

// -----------------------------------------------------------------------------------------------------------------------

// Now Teach start : 

// topic 1: DOM Tree structure : node, element, text, comment
// DOM ek nested tree like structer hota hai jisme html ka sara body content aata hai jo web page banta hai.
// ANd DOM Manipulation ye hai ki web page pe jab click krte hai or kuch changes occur hota hai vo manipulation hai (just like u click download button).


// DOM Manipulation sikhne ke liye aapko ye aana chaiye :
// 1. html se element select karna
// 2. text badlna
// 3. html badalna
// 4. css badalna
// 5. attribute badalna 
// 6. event isteners add karna

// Topic 2. (Selecting elements) html se : => getElementById, getElementsByClassName, querySelector and querySelectorAll  { we use the querySelectors as of now bcz other twoo was used in purane jamane}

// for id
 let abcd = document.getElementById("abcd"); // ye tumko vo h1 node nikalke dega or variable 'abcd' m store hoga
 console.dir(abcd); // kayi bar reload krne par .log se h1 tag dikhta hai and .dir se sirf h1#abcd

// .dir ky krta hai ye us node ko opening format mein bna deta hai
// And .log ky krta hai ye usko tag me bnadeta hai kai bar or kayi bar opening format mein

// for class
// let abc = document.getElementsByClassName("abc"); // ye jo hai array jesa structure hota hai Array nahi
// console.dir(abc);


// Ab ye hai sahi tarika jo ab use karte hai select krne ka 

let ab = document.querySelector("h2"); // jo bhi body ke andar phela h2 hoga vo select hoga only.
console.dir(ab);

let xyz = document.querySelectorAll("h2"); // ye dega array jesa structure of all h2 tags present in ur code.
console.dir(xyz);


// --------------------Ab text change krne ke liye code---------------------
// Text/content access : innerText, textContent, innerHtml


// 1. select element or tag or text 
// 2. change accordingly
let xuv = document.querySelector("h1");
console.dir(xuv);
xuv.textContent = "hello vishant kaise ho";


















































