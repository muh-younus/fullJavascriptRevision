let newButton = document.createElement("button");
newButton.innerText="Clicked Me";
let doc = document.querySelector("body");
doc.append(newButton);
newButton.style.color = "Yellow";
newButton.style.backgroundColor = "black";
console.log(newButton);

let para = document.createElement("p");
para.setAttribute("class","paragraph");

para.innerText = "Hello i am new here";
doc.append(para);
console.log(para);

let innerBody = document.querySelectorAll(".Main-1")[0];
innerBody.classList.add("newClass");
