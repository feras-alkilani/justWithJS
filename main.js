// DOM Challenge

// Rest Body
document.body.style.cssText = "background-color: #ddd; padding: 0; margin: 0; box-sizing: border-box; font-family: 'Arial'"; // #23a96e

// Create Header Elements
let header = document.createElement("header"); // Main Header
let logo = document.createElement("div"); // Div Logo
let ul = document.createElement("ul"); // Unorder List
// Adding Classes
header.classList.add("website-header");
logo.classList.add("logo");
ul.classList.add("menu");



logo.style.marginTop= "20px";
ul.style.marginTop= "20px";




// Text Of Header Elements
let logoText = document.createTextNode("Alkilani");
logo.appendChild(logoText);
// Adding Text To Li
let arrLi = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < arrLi.length; i++) {
  let li = document.createElement("li"); // List Items
  // Styling Li
  li.style.cssText = "margin-right: 10px; font-size: 18px; color: #807d7d;";
  li.style.cursor= "pointer";
  
  li.innerHTML = arrLi[i];
  ul.appendChild(li);
}
// Apppended To Header
header.appendChild(logo);
header.appendChild(ul);

// CSS Styling Header
header.style.cssText = "background-color: #fff; display: flex; justify-content: space-between; align-items: center";
logo.style.cssText = "color: #23a96e; font-weight: bold; padding-left: 20px; font-size: 24px";
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.marginRight = "30px";


// Append Header To Body
document.body.appendChild(header);

// Create Content And Products
let $content = document.createElement("div");
// Styling Content Div
$content.style.cssText = "display: flex; padding: 20px; gap: 20px; flex-wrap: wrap; justify-content: center; min-height: calc(100vh - 142px)";
// Adding Class To Content Div
$content.classList.add("content");

for (let i = 1; i <= 15; i++ ) {
  let $product = document.createElement("div");
  let $span = document.createElement("span");
  let textProd = document.createTextNode("Product");

  $product.classList.add("product");

  let num = i.toString();
  $span.innerHTML = num;

  $product.appendChild($span);
  $product.appendChild(textProd);
  $content.appendChild($product);

  // Styling $content Elements
  $product.style.cssText = "padding: 20px; background-color: #fff; box-sizing: border-box; border: 1px solid #fff; width: calc((100% - 100px) / 3); text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
  $span.style.cssText = "font-size: 40px; color: #000; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px";
}

// Append Content To Body
document.body.appendChild($content);

// Footer Elemnt
let foot = document.createElement("footer");
let footText = document.createTextNode("Copyright 2021");
foot.classList.add("footer");
foot.appendChild(footText);

// Styling Footer
foot.style.backgroundColor = "rgb(35, 169, 110)";
foot.style.fontSize = "26px";
foot.style.textAlign = "center";
foot.style.padding = "20px";
foot.style.color = "#fff";


document.body.appendChild(foot);

