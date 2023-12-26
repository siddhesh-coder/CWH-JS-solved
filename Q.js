//Q1

// function groups(array){
//   let Gryffindor = [];
//   let Hufflepuff = [];
//   let Ravenclaw = [];
//   let Slytherin = [];
//    array.map((student)=>{
//     let n = student.length;
//       if(n<6){
//         Gryffindor.push(student);
//       }else if(n>6 && n<8){
//         Hufflepuff.push(student);
//       }else if(n>8 && n<12){
//         Ravenclaw.push(student);
//       }else if(n >= 12){
//         Slytherin.push(student);
//       }
//    })
//    return obj = {
//       group1: Gryffindor,
//       group2: Hufflepuff,
//       group3: Ravenclaw,
//       group4: Slytherin,
//    }
// }

// const dummyNames = [
//   'BgcmTLevDwKDE',   'MmvxRKC',
//   'XWBbenaS',        'YGliowvdG',
//   'cyBoctGqZA',      'OUflcJax',
//   'wxGwL',           'gNITTFfJqlskg',
//   'AlWdctlLxYKejAW', 'EGOnhKrcobK',
//   'BVeHirKFfINdRTi', 'UaUjgfukVvNaLo',
//   'NxKWpeuSppLvFst', 'tkRqSyUCM',
//   'SKyiUpCNOB'
// ];

// console.log(groups(dummyNames));

//Q2 
function DoubleTrouble(array){
   let set = new Set(array);
   let res = Array.from(set);
   let newArray = [];
   res.forEach((el)=>{
      newArray.push(el);
      newArray.push(el);
   });
   return newArray
}

const el = [1,2,3,4,4,5,7,8,8,9,0];

console.log(DoubleTrouble(el));
//!random one pending

//Q3
function MirrorMirror(str){
    let mirrorStr = str.split('').reverse().join('');
    return str+mirrorStr;
}

const string = "Javascript";
console.log(MirrorMirror(string));

//Q4

function passwordChecker(pass){

}
const pass = "2Funky&4U";
console.log(passwordChecker(pass));

//The Sum Selector
// function Sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       break;
//     }
//     sum += array[i];
//   }
//   return sum;
// }

// let array = [1, 2, 34, 3, 45, 476, 67, -8665, 22, 1];

// console.log(Sum(array));

//The Vowel Counter
// function checkVowels(str){
//    const n = str.length;
//    let clone = str.toLowerCase();
//    let count = 0;
//    for(let i=0;i<n;i++){
//      if(clone[i] === 'a' || clone[i] === 'e' || clone[i] === 'i' || clone[i] === 'o' || clone[i] === 'u'){
//        count++;
//      }
//    }
//    return count;
// }

// const str = "The quIck brOwn fox jUmps over the lAzy dog.";

// console.log(checkVowels(str));


//The Local Storage Manager
// document.addEventListener("DOMContentLoaded", loadData);

// const submit = document.getElementById("Submit");
// const display = document.getElementById("display-notes");
// const note = document.getElementById("note-area");
// let count = 0;

// function loadData() {
//   displayStoredNote();
//   count = parseInt(localStorage.getItem("count")) || 0;
// }

// function storeNotes() {
//   let ptag = document.createElement("p");
//   ptag.textContent = `Note No:${++count}:${note.value}`;

//   let noteKey = count;

//   localStorage.setItem(noteKey, note.value);
//   localStorage.setItem("count", count);

//   display.appendChild(ptag);

//   note.value = "";
// }

// submit.addEventListener("click", storeNotes);

// function displayStoredNote() {
//   for (let i = 1; i <= localStorage.length; i++) {
//     let key = i;
//     let value = localStorage.getItem(key);

//     if (value !== null) {
//       let ptag = document.createElement("p");
//       ptag.textContent = `Note No:${i}:${value}`;
//       display.appendChild(ptag);
//     }
//   }
// }


//placeorder--->product name, price
  
  
// function PlaceOrder(products){
//    let sucess = [];
//    products.forEach(element => {
//       sucess.push(
//         new Promise((resolve)=>{
//            setTimeout(()=>{
//               resolve(element.productName);
//            },2000);
//         })
//       );
//    });
//    return sucess;
// }
// const products = [
//     { productName: "Laptop", price: 999.99 },
//     { productName: "Smartphone", price: 499.99 },
//     { productName: "Headphones", price: 79.99 },
//     { productName: "Coffee Maker", price: 39.99 },
//     { productName: "Wireless Mouse", price: 29.99 }
//   ];


// async function result(){
//     let data = await Promise.all(PlaceOrder(products));
//     console.log(data);
// }
// result();

//Q9 The Asynchronous Shopper

// function placeOrder(){
//     return new Promise((resolve)=>{
//         let delay = Math.random() * 3000 + 1000;
//         setTimeout(()=>{
//            const msg = "Your order has been placed successfully!";
//            resolve(msg);
//         },delay);
//     });
// };
// placeOrder()
// .then((res)=> console.log(res))
// .catch((error)=> console.log(error));


//10
async function brewCoffee(coffeeType) {
    return new Promise((resolve) => {
      const brewTime = Math.random() * 3000 + 1000; // Random brewing time between 1000 to 4000 milliseconds
  
      setTimeout(() => {
        const message = `Your ${coffeeType} coffee is ready!`;
        resolve(message);
      }, brewTime);
    });
  }
  
  // Example usage:
  async function makeCoffee() {
    try {
      const coffeeType = "Espresso"; // Replace with the desired coffee type
      const result = await brewCoffee(coffeeType);
      console.log(result); // Output: Your Espresso coffee is ready!
    } catch (error) {
      console.error("Error brewing coffee:", error);
    }
  }
  
  makeCoffee();
  
//11
// const products = [
//   { name: "Product 1", price: 19.99 },
//   { name: "Product 2", price: 29.99 },
//   { name: "Product 3", price: 14.99 },
//   { name: "Product 4", price: 39.99 },
//   { name: "Product 5", price: 9.99 },
// ];

// Array.prototype.productFilter = function () {
//   let res = [];
//   this.forEach((element) => {
//     if (element.price > 14 && element.price < 39) {
//        res.push(element);
//      }
//   });
//   return res;
// };

// let res = products.productFilter();
// console.log(res);

//12 The Token Manager
// function storeData(token, expirationMinute) {
//   const expirationTime = new Date();
//   expirationTime.setTime(
//     expirationTime.getTime() + expirationMinute * 60 * 1000
//   );

//   const tokenData = {
//     value: token,
//     expiration: expirationTime.getTime(),
//   };

//   localStorage.setItem("authToken", JSON.stringify(tokenData));
// }

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
// const expirationMinute = 5; //How much time it will remain in the local storage
// storeData(token, expirationMinute);

// function getToken() {
//   const tokenInfo = localStorage.getItem("authToken");
//   const validData = JSON.parse(tokenInfo);
//   const currentTime = new Date();

//   if (validData && validData.expiration > currentTime.getTime()) {
//     return validData.value;
//   } else {
//     localStorage.removeItem("authToken"); // Fix the key here
//   }
//   return null;
// }

// function presentData() {
//   const incomingToken = getToken();

//   if (incomingToken) {
//     console.log(`I have the token: ${incomingToken}`);
//   } else {
//     console.log(`OOPS!!! Token has expired`);
//   }
// }

// presentData();


//13 The Shopping Cart Totalizer

// function totalCost(items){
//   let finalCost = 0;

//   for(let i=0;i<items.length;i++){
//      finalCost += items[i].quantity * items[i].price;
//   }

//   return finalCost;
// }


// const productsCart = [
//   { productName: 'Product A', quantity: 10, price: 20.99 },
//   { productName: 'Product B', quantity: 5, price: 15.50 },
//   { productName: 'Product C', quantity: 8, price: 12.75 },
//   { productName: 'Product D', quantity: 12, price: 30.00 },
// ];
// console.log(totalCost(productsCart));

//14 Smooth scroll bar
const button = document.querySelector('#scrollToTopBtn');

document.addEventListener("DOMContentLoaded",function(){
    
    window.onscroll = function(){
         if(document.documentElement.scrollTop > 20){
            button.style.display = 'block';
         }else{
            button.style.display = 'none';
         }
    };

    button.addEventListener('click',function(){
        smoothScroll();
    });
});



function smoothScroll(){
    let currentScroll =document.documentElement.scrollTop;
    if(currentScroll > 0){
       window.requestAnimationFrame(smoothScroll);

       window.scrollTo(0, currentScroll - currentScroll/8);
    }
}
