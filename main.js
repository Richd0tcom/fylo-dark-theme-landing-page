const err = document.querySelector('.error');
const submit = document.querySelector('.yea1');
const email = document.querySelector('.email');


submit.addEventListener('click',validate);

function validate(e){
    if(email.value == ''){
        err.style.display = 'block';
    }
}