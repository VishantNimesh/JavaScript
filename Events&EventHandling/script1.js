
//       **Events And Event Handling**

// browser mein page par koi bhi harkat karo event raise ho jayega.

// kuch screen par ho aur apko reaction dena ho to, us waqt aapko event handle karna aana chaiye.


// Event ka matlb hota hai koi action hua.
// Event listener ka matlab hai aapne koi action ka reaction diya. (technical ye matlb nahi par manlo abhi ke liye)

// Topic 1: addEventListener, removeEventListener
let h1 = document.querySelector("h1"); // 1. select the paragraph/h1 tag first.
h1.addEventListener("click", function() { // 2. add karo eventListner
    h1.style.color = "red"; // 3. add color on click action.
});

h1.addEventListener("click", function() {
    h1.style.backgroundColor = "aqua";
});

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function() { // dblclick pe nhi chlra yr mera.
//     this.style.color = "blue";
// });

// Syntax:  element.addEventListnet("event name", function() {});


// topic : remove event listner
let p = document.querySelector("p");

function dblclick() {
    p.style.color = "green";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick", dblclick);







