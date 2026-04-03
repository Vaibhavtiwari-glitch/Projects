const arr = document.querySelector('.prev');
const msg = document.querySelector('.msg');
const life = document.querySelector('.lives');
const reset = document.querySelector('.reset');
let random = Math.round(Math.random()*100 + 1);

console.log(random);
const submit = document.querySelector('.submit');
let count = 0 ;
let lives = 3;
let prev = [];
arr.innerHTML = `your guesses : ` ;
life.innerHTML = 'your attempt left : 3';
submit.addEventListener('click',function(){
    const input = parseInt(document.querySelector('.input').value);
    if(isNaN(input) || input == 0 || input < 1 || input > 100){
msg.innerHTML = 'ENTER A VALID NUMBER';
life.innerHTML ='your attempt left : ';
submit.style.display = 'none';
    }
    else{
        prev.push(input)
        count = count + 1;
        arr.innerHTML = `your guesses :  ${prev}` ;
        lives = lives - 1;
        life.innerHTML = `your attempt left : ${lives}`;
        if(count>=3){
            msg.innerHTML = `YOUR CHANCES ARE OVER THE NUMBER WAS : ${random}`;
            submit.style.display = 'none';
            return;
        }
if(count>=0 && count<3){
        if(random == input){
            msg.innerHTML = 'CONGRATS !! YOU WON';
            submit.style.display = 'none';
            return;
        }
        else if(random < input){
            msg.innerHTML = 'GUESS LOWER';
        }
        else if(random > input){
            msg.innerHTML = 'GUESS HIGHER';
        }
    }
    }  
})

reset.addEventListener('click',function(){
    random = Math.round(Math.random()*100 + 1);
    count = 0;
    lives = 3;
    prev =[];
    document.querySelector('.input').value = '';
    arr.innerHTML = 'your guesses : ';
life.innerHTML = 'your attempt left : 3';
msg.innerHTML ='';
submit.style.display = 'flex';
submit.style.justifyContent = 'center';
submit.style.alignItems = 'center';
})