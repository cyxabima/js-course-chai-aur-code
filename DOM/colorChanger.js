const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
  body.style.backgroundColor = e.target.id;
})
})