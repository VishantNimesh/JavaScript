
// topic 3 : content change -> text change/ manipulation
// topic 3 :=> Text/content access : innerText, textContent, innerHtml


// let change = document.querySelector("h1"); // jo select krna hota hai vo bracket m double quotes ke andr likhte hai. or let ke sath kuch bhi kisi bhi naam ka variable le sakte hai
// console.dir(change);
// change.textContent = "Mai aacha hu aap btao"; // object ke roop m data store hota hai isliye (.dot) use kiya hai, object k andar move krne ke liye . use krte h


// innerHTML text change nhi krta vo html dalta hai udhr 

let h1 = document.querySelector("h1");
h1.innerHTML = "<i>I Hate You</i>"; // kisi bhi element ke andar agr HTML dalna hai to innerHTML ka use kro..
console.dir(h1);
// h1.hidden = true;  // hide krdega isse selected element ko or yahi hota hai DOM Manipulation



// Topic 4 : Attribute manipulation : getAttribute, setAttribute, removeAttribute

// let attrubute = document.querySelector("a");
// console.dir(attrubute);
// attrubute.href = "https://www.google.com"; // ab sirf ye tarika nahi hai set krne ka 
// ye to ek directly tarika hai isko krne ke liye get-set kaam aata hai


let a = document.querySelector("a");
console.dir(a);
a.setAttribute("href", "https://www.youtube.com");
// isme 2 chije pass krni hoti hai ki aap a tag ka konsa attribute set krre ho vo, and kya krne vale ho mtlb value.


// let img = document.querySelector("img");
// img.setAttribute("src", "https://images.unsplash.com/photo-1788938594249-407d8be94d89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" );


let get = document.querySelector("a");
console.log(get.getAttribute("href"));  // getAttribute koi bhi attribute get krskte hai ..iske through


// removeAttribute 

let rem = document.querySelector("a");
rem.removeAttribute("href"); // href remove hojayega....




// Topic 5. Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend

// create element
// append/prepend karo jaha bhi element chaiye waha...

let h3 = document.createElement("h3");
console.log(h3); // blank h3 on console
h3.textContent = "Hello ji kaise ho"; // ab iske jariye content h3 m daal sakte hai par vo show nhi hoga abhi.
// document.body.prepend(h3); // ab show hoga sabse upar bcz prepend kiya hai (agar append krte to last m)
// or
document.querySelector("body").appendChild(h3); 

h3.remove(); // remove hojayega




// TOPIC 6 : Style updates via .style and classList(add, remove, toggle).

// js se css badlna ya fir js se csss add karna/ make changes

// .style se =>
let h4 = document.querySelector("h4");
// console.dir(h4);
h4.style.color = "red";  // h4 ke css jo h style uske color ko laal kiya hai
console.dir(h4); // abb css m color ki property red hogi

h4.style.backgroundColor = "aqua"; 
h4.style.fontFamily = "cursive"; // text font change hojayega.
h4.style.textTransform = "capitalize"; // har word ka phela letter capital hojayega

// classList se =>

let classAdd = document.querySelector("h5");
classAdd.classList.add("hulu");  // 'hulu' is class in css which is added by helping js

let h6 = document.querySelector("h6");
h6.classList.remove("mark");

h6.classList.toggle("mark"); // toggle hati hui class ko lgadeta hai ot lagi hui ko htadeta hai. (agr class h to htadega nahi hai to lgadega).



// Practice Questions :

// Q 1. what is the DOM? how does it represent the html structure?
// Ans -> Document object model has a tree like structure in this model every html tags element behave as a node.

// Q 2. Name the types of nodes int the DOM tree.
// Ans -> node, element node, rext node, comment node

// Q 3: what's the diff b/w an element node and a text node?
// Ans -> element node actual tag hota hai AND uske andar ka text text node hota hai.
//     Element node ka childern hos skta hai lekin text node ka nahi ho sakta.

// Q 4: Inspect the following HTML in the browser and identify each node.
// Ans -> inspect krke arrow se each node pe render krkr dekho.

// Q 5: what is the diff b/w getElementById and querySelector?
// Ans -> getElementById("apple") -> isme apko # nhi lgana pdta kyonki aap only id hee select krre ho AND
        // querySelector("#apple") -> isme lgana pdta hai btane ke liye ki aap id element select krre ho.

// Q6: what does getElementByClassName return ? Is it an array?
// Ans -> not an array a very similar struture to array, it always HTMLCollection.

// Q7: Use querySelectorAll to select all buttons with class ".buy-now".
// Ans -> let buynow = document.querySelectorAll(".buy-now");
//          console.log(buynow);  and QueryselectorAll gives a NodeList array like structure not exactly.

// Q8: Select all <li> elements and print their text using a loop.
// Ans ->  
// <ul> <li>apple</li>
//      <li>apple 2</li>
//      <li>apple 3</li>
//      <li>apple 4</li>
//      <li>apple 5</li>
// </ul>
// 
// let lis = document.querySelectorAll("li"); // hum querySelectorAll krre hai to ye array jesa structure hota hai or uspe hum loop karskte hai/lga skte hai.
// lis.forEach(function(val) {
//  console.log(val); // ese to sirf li li li print hoga
//  console.log(val.textContent); // tab uska content print hoga
// })
// orrrr...
//  let lis = document.querySelector("li");
//  for(let i = 0; i < lis.length; i++) {
//      console.log(lis[i]);
// }


// Q9: what's the difference b/w innerText, textContent and innerHTML?
//  Ans-> innerText and textContent do the same work change the content of element/tag
//  AND innerHTML adds the Html in the element .


// Q10: When should you use textContent instead of innerText?
// Ans -> textContent apko tag element ka sara data nikal ke deta hai chaiye vo display p visible ho ya nahi means display none he eku na ho AND
//  innerText apko sirf or sirf visible content hee nikalkr deta hai.
// textContent faster hota hai innerText se.

// ------------------------------------------------------
// Task Number 3: Select a paragraph and replace its content with:
    /* <b>Updated</b> by JavaScript */

    // Answer :
// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by JavaScript";
// ---------------------------------------------------------

// Q11: How do you get the src of an image using Js?
// Ans -> let img = document.querySelector("img");
        // console.log(Image.src); // phela tarika 
// Or
// console.log(img.getAttribute("src")); // 2nd way to do this

// Q12 : whaat does setAttribute do?

// Q13: Add a title attribute to a div dynamically.
//   html mein ek div tag bnaya
//  <div title = "hey"> lorem32</div> // to ye hey jab is content pe hower krenge to {hey} dikhega.

//  so filhal <div> lorem32</div> ye esa hai
// Ans -> let div = document.querySelector("div");
        // div.setAttribute("title", "some information");
            // div.title = ""; // ese bhi kr skte hai


// Q14: Remove the disabled attribute from a button.
// <button disabled>download now</button>
// Ans -> let btn = document.QuerySelector("button");
    // btn.removeAttribute("disabled"); // ab hatjayega disabled or ab hum click karke kam krskte hai download ka.


// Q15 : what does createElement() do? what's returned?
// Ans -> element create krke deta hai ye and ye ek HTML Node/ html element return karta hai.

// Q16 : wht's the diff b/w appendChild() AND prepend().
// 

// Q 17: can u remove an element using removeChild()?
// Ans -> document.querySelector("div").removeChild("elementNode"); // element node dalni hogi idhr jo bhi apko delete karna hai.




// -------------------------------------------------------------------
// Task 1: Create a new list item <li>New Task</li> and add it to the end of a <ul>.
//     <ul>
//         <li>apple</li>
//         <li>mango</li>
//         <li>banana</li>
//         <li>pineapple</li>
//     </ul>
// // ANS :
//  let ul = document.querySelector("ul");
// let li = document.createElement("li"); // new li bnaya or ye abhi khali hai
// 
//  li.textContent = "New Task"; // fir li me element / data dala
// ul.appendChild(li); // or fir li ko ul ke baad append kradiya.


// Task 8: Create a new image element with a placeholder source and add it at the top of a div.
// Ans -> let img = document.createElement("img");
//      img.setAttribute("src", "image address");
// document.querySelector("div").prepend(img);

// or aap isko class add krke bhi karskte ho
// img.classList.add("placeholder"); // ye placeholder class ka naam hai jo css file m hogi. ya fir inline css.


// Task 9: select the first item in a list and delete it from the DOM.
// Ans -> let ul = document.querySelector("ul");
//  let li = document.querySelector("li");
// ul.removeChild(li);


// Question 15: how do you change the background color of an element?
// ans -> element.style.backgroundColor = "red";


// Task 10: Add a highlight class to every even item in a list.
// Ans -> let li = document.querySelectorAll("ul li:nth-child(2n)"); // ul mein list ke and har dusra element select hoga
// li.forEach(function (elem) { // or vo elem idhr ayega, fir uspe highlight lgega..
// elem.classList.add("highlight"); // ye highlight class hogi css file mein.
// });



// Question 16: Set the font size of all <p> elements to 18px using .style
// Ans -> let p = document.querySelectorAll("p");
//  p.forEach(function(element) {
//  element.style.fontSize = "18px";
// });




