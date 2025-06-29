let htmlBody = document.body;
console.log(htmlBody);

 htmlBody.style.backgroundColor = "black";


htmlBody.addEventListener("click" ,function(){

    let color = htmlBody.style.backgroundColor;



    if(color == "black"){


        htmlBody.style.backgroundColor = "blue";
        console.log("run black condition")
    }
    else if(color == "blue"){
        console.log(htmlBody.style.backgroundColor)

        htmlBody.style.backgroundColor = "black";
        console.log("run blue condition")
    }
   
})

let btn = document.querySelector(".btn-click");

btn.addEventListener("click", function(event){

    console.log(event);
    console.log(event.clientX, event.clientY);
    console.log(event.type);
    console.log(event.target)


})



let alert1 =  () => {

    alert("")
};

btn.removeEventListener("click", alert1);


let valueOfString = [1,2,3,4,5,6,7];

for(let val of valueOfString){

if(val !== " "){
console.log("The value of string is" , val)
}

}


let inLoop = {

name : "Muhammad Younus",
age : 12,
section: "B",
isPass : true
}

console.log("For-In-Loop");
for(let val in inLoop){


console.log("The in loop value",val, ":" , inLoop[val]);

}

