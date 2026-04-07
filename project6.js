const input = document.querySelector('.input');
const tasklist = document.querySelector('.tasklist');
const task = document.querySelector('.task');

const  btn = document.querySelectorAll('.btn');

const add = document.querySelector('.addbtn');
let inputvalue ; 
let removing;
function newtask(){
 const li = document.createElement('li');
 li.classList.add('task');
 li.innerHTML = `${inputvalue} <button class = 'btn'>X</button>`;
 tasklist.appendChild(li);
}
add.addEventListener('click',function(){
inputvalue = input.value;
input.value = '';
newtask();
});
tasklist.addEventListener('click',function(e){
        if(e.target.classList.contains('btn')){
 e.target.parentElement.remove() ;
    }
});

