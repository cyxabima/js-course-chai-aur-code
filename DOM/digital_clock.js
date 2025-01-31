const clock = document.querySelector('#clock');

// with out inner html
// setInterval(() => {
//   if(clock.firstChild){
//     clock.firstChild.remove();
//   }
//   const date = new Date();
//   const localDate = date.toLocaleTimeString();

//   const date_element = document.createElement('h1');

//   date_element.textContent = localDate;
//   clock.appendChild(date_element); 
// }, 1000);

setInterval(() => {

    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

