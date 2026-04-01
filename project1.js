// const reset = document.querySelector('.reset');
// const trymsg = document.querySelector('.trymsg');
// const heading = document.querySelector('.heading');
// const btn1 = document.querySelector('#btn1');
// console.log(reset);
// btn1.addEventListener('click',(e) =>{
//     document.body.style.backgroundColor = 'red';
// })
// const btn2 = document.querySelector('#btn2');

// btn2.addEventListener('click',(e) =>{
//     document.body.style.backgroundColor = 'green';
// })
// const btn3 = document.querySelector('#btn3');

// btn3.addEventListener('click',(e) =>{
//     document.body.style.backgroundColor = 'yellow';
// })
// const btn4 = document.querySelector('#btn4');

// btn4.addEventListener('click',(e) =>{
//     document.body.style.backgroundColor = 'blue';
// })
// reset.addEventListener('click',(e) =>{
//     document.body.style.backgroundColor = '#212121';
// })

// method 2 
// const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
// buttons.forEach((butt) => {
//     butt.addEventListener('click',()=>{
// const colors = butt.getAttribute("color");
// console.log(colors);
// document.body.style.backgroundColor =colors;
//     });
// });
//revision of method 2 
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(butt){
    butt.addEventListener('click',function(){
        const colors = butt.getAttribute("color");
        console.log(colors);
        document.body.style.backgroundColor =colors;
    })
})