
// Objects :=>    

    // Topic:  create a object {key: value structure}
let obj = {
    name: "harsh",
    age: 26,
    khana: "Bhature",
};

// Topic : how to access object : by dot notation (. )
let a = obj.age;
let b = obj['age']; // these are the two ways to access object elements.

// ye 2 tarike ku hai uska bhi karan hai

let aa = "name";
// let aaa = obj.aa; // .aa ka mtlb hai ki vo object mein aa hee dhundega "aa" convert nahi hoga ki "aa" mein name ajeyga or fir vo "name" object m dhundkar uski value dega.

let aaa = obj[aa]; // [] square brackets m likhne se 'aa' mein 'name' ajeyga means convert hojayega. then fir vo object mein se 'name' ki value dedega.


// Topic : Nesting and deep access.

const user = { // Nesting of objects..
    name: "vishant",
    address: {
        city: "Muradnagar",
        pin: 201206,
        location: {
            lat: 32.2,
            lng: 77.4,
        },
    },
};

let val = user.address.location.lng; // deep access



// Topic: Object destructuring.
let {lat, lng} = user.address.location; // same name dena hoga jo bhi bhar variable me nikalna hai to..


// Topic: Looping => for-in, Object.keys, Object.entries

// for-in ->
let obje = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
};

for(let key in obje) {
    // console.log(key); // sari keys aajyegi ek ek krke isme
    console.log(key, obje[key]); // values ese access karni hoti hai...
}

// Object.keys -> jab aapko object ki keys ka array bnana ho to tab hum object.keys() ka use krenge
let ar = Object.keys(obje);

// Object.entries ->
let am = Object.entries(obje); // Araay of arrays banata hai ye 



// Topic=> Copying objects: spread, Object.assign, deep clone

let obj2 = {...obj}; // spread operator

// let objCopy = Object.assign({}, obj); // ye bhi copy krne kee hee kaam aata hai.
let objCopy = Object.assign({ price: Infinity}, obj); // ye key value ke sath new object banjayega copy hoke


// Deep clone -> isme Object and sub-objects ki real copy karta hai...

const emp = { // Nestion objects
    name: "vishant",
    age: 21,
    email: "test@test.com",
    address: {
        city: "Muradnagar",
    },
};

// let empCp = { ...emp}; // ye sirf nested objects m sirf upar vale object ka realo copy karta hai, baki sub-objects ki refrence copy karne lagta hai. {jiska solution aaya deep copy mein.}
// empCp.address.city = "Indore"; // dono mein change hojayegi city.

// Now use deep copy
let empDeepCopy = JSON.parse(JSON.stringify(emp)); // ye phle string mein convert hogi then uske baad jab parse krenge to orignal data m convert hojayegi and copy hojayegi deeeep...
// stringify se object ka data string mein convert hojata hai jo ki refrence vgera nahi bachta hai then usko parse krke orignal bnate hai to tab vo orignal/reaal copy hota hai na ki refrence..



// Topic : Optional chaining, computed properties.

// Optional chaining -> ye hoti hai ki jab aap koi value access kree ho or vo ho bhi sakti hai or nahi bhi sure nahi ho to tab "Optional chaining" use krte hai taki agr hai to value dedo uske according agr nahi hai to undefined par error mat dena..
let value = emp?.address?.city; // kai baar esi property hoti hai jo ki exist krti hai or nai bhi.


// Computed properties ->  dynamaclly variable ko object m assign karna.

let role = "admin";

let object = {
    name: "vishant",
    age: 21,
    email: "test@test.com",
    adresses: {
        city: "bhopal",
    },
    [role]: "harsh", // ye add krdega admin vali key or uske respective value.
};


















