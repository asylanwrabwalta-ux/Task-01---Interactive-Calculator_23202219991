let display = document.getElementById("display");

function press(value){

if(display.innerText === "0"){

display.innerText = value;

}

else{

display.innerText += value;

}
}
function clearScreen(){

display.innerText="0";

}

function deleteNumber(){

let value = display.innerText;
if(value.length <= 1){

display.innerText="0";

}
else{
display.innerText=value.slice(0,-1);

}

}
function result(){

try{

display.innerText =
eval(display.innerText);

}

catch{
display.innerText="Error";

}
}

document.addEventListener("keydown",function(e){
if(
!isNaN(e.key)
||
"+-*/.".includes(e.key)
){
press(e.key);
}

if(e.key==="Enter"){

result();

}

if(e.key==="Escape"){

clearScreen();

}

if(e.key==="Backspace"){

deleteNumber();

}

})
