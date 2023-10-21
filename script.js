//your JS code here. If required.
const button =document.getElementById("enterBtn");
const para =document.getElementById("status");
let h1Element = document.createEvent("h1");
h1Element.innerText =“Entered Metaverse”;
h1Element.id="status";
let bodyTag = document.querySelector(".container");
button.addEventListener("click",()=>{
	bodyTag.insertBefore(h1Element,para);
	para.remove();
	
});