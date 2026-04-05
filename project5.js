const input = document.querySelector('.inputNo');
const guess = document.querySelector('.guess');
const msg = document.querySelector('.msg');
const reset = document.querySelector('.reset');
const chances = document.querySelector('.chances');
const prev = document.querySelector('.prevguess');
let value ;
let random;
let count = 0 ;
let lives = 3 ;
let prevguess  = [];
msg.innerHTML = 'Start the game';
chances.innerHTML = `You have 3 Chances left`;
random = Math.floor(Math.random()*100 +1);
console.log(random);
guess.addEventListener('click',function(){
    count = count + 1 ;
    lives = lives - 1 ;
value = parseInt(input.value);
prevguess.push(value);
prev.innerHTML = `Your Previous Guesses : ${prevguess}`;
if(isNaN(value) || value < 1 || value >100){
guess.style.display = 'none';
msg.innerHTML = 'ENTER A VALID INPUT & RESET THE GAME ';
}
else{
    input.value = '';
    if(count >=1 && count <3){
    if(value === random){
        msg.innerHTML = 'CONGRATS YOU WON !!';
        msg.style.fontSize = '40px';
        chances.style.display = 'none';
    }
    else if(value > random){
        msg.innerHTML = 'GUESS LOWER';
    }
    else{
        msg.innerHTML = 'GUESS HIGHER';
    }
}
}
if(count >=3){
    msg.innerHTML = `GAME OVER THE NUMBER WAS : ${random}`;
    guess.style.display = 'none';
}
chances.innerHTML = `You have ${lives} Chances left`;
});
reset.addEventListener('click',function(){
    random = Math.floor(Math.random()*100 +1);
    console.log(random);
guess.style.display = 'flex';
guess.style.justifyContent = 'center';
guess.style.alignItems = 'center';
chances.style.display = 'block';
chances.innerHTML = `You have 3 Chances left`;
msg.innerHTML = 'Start the game';
lives  = 3 ;
count  = 0 ; 
prevguess = [];
});