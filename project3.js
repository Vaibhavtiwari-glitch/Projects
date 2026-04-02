const clock = document.querySelector('.frame');

setInterval(()=>{
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
},1000);
//setInterval(function(){},1000);