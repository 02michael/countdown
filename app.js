let counter = 1;
let el = document.querySelector(".integer")
setInterval(()=>{
  counter = counter < 10 ? counter + 1 : 0;
  const transition = document.startViewTransition(() => {
    el.textContent = counter; 
  });
},1000);