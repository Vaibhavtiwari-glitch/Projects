const submit = document.querySelector('.submit');
const final = document.querySelector('.final');
const error = document.querySelector('.error');
const err = 'PLEASE ENTER THE VALID INPUT';
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const height = document.querySelector('.height');
    const value1 = height.value; 
    const val1 = value1*value1;
    const weight = document.querySelector('.weight');
    const value2 = weight.value;
    const result = (value2/val1);
    const answer = result.toFixed(2);
    if(value1 == '' || value1 == 0 || value2 =='' || value2 == 0 ){
       error.append(err);
    }
    else{
final.append(answer);
    }
height.value = "";
weight.value = "";
});
