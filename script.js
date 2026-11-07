//your JS code here. If required.
const text=document.getElementById("text");
const delay=document.getElementById("delay");
const button=document.getElementById("btn");
const output=document.getElementById("output")

button.addEventListener("click",async ()=>{
	const message=text.value;
	const time=Number(delay.value);

	await new Promise(resolve=>setTimeout(resolve,time))
	output.innerText=`${message}`
})
