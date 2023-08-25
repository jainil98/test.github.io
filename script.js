/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

// TIKTOK CODE START HERE
const currency = "USD";
var user_email = "ENTER YOUR EMAIL HERE";
var event_id = "Unset";
var product = null;


// Demo function for grabing clickid
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
if(urlParams.has('ttclid')){
  const ttclid = urlParams.get('ttclid')
  window.alert("Your ttclid is being captured and it is: "+ttclid);
}

function handleAddToCartClick() {
    ttq.instance('CJDVFCBC77UE7I79HT40').track('AddToCart', {
       contents: [
        {
          content_id: product.id,
          content_name: product.title,
          price: product.price,
        }],
        content_type: 'product',
        value: product.price,
        currency: currency,
    })
}
document.getElementById("addToCartButton").onclick = handleAddToCartClick;

function handleCompletePaymentClick() {
    ttq.instance('CJDVFCBC77UE7I79HT40').track('CompletePayment', {
       contents: [
        {
          content_id: product.id,
          content_name: product.title,
          price: product.price,
        }],
        content_type: 'product',
        value: product.price,
        currency: currency,
    })
}
document.getElementById("completePayment").onclick = handleCompletePaymentClick;

window.onload = function() {
  
  // Initlize page product
  function load_product(json) {
    product = json
    document.getElementById("value").innerHTML = product.price;
    document.getElementById("SKU").innerHTML = product.id;
    document.getElementById("title").innerHTML = product.title;
    document.getElementById("description").innerHTML = product.description;
    document.getElementById("product_img").src = product.image;
    
    // create unique transaction id for it
    event_id = uuidv4();
    console.log(event_id);
    document.getElementById("event_id").innerHTML = event_id;
    document.getElementById("currency").innerHTML = currency;
    document.getElementById("user_email").innerHTML = user_email;
  } 
  
  // Fetch some product from some fake api
  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>load_product(json))
  
  // BONUS: Fetch mutilple product
  // fetch('https://fakestoreapi.com/products?limit=2')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  
  
  // A helper function generate a uuid (Universal Unique Identifier)
  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  // Regen event_id after button click
  // In real world scanrio, a uuid/sessionid/transactionid could be used for event id
  document.getElementById("refresh_button").addEventListener('click',function() { 
    event_id = uuidv4();
    document.getElementById("event_id").innerHTML = event_id;
  });

  function set_user_email(){
    user_email=document.getElementById("user_email").value;
    console.log(user_email);
  }
  
}