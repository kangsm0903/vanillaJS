const form = document.querySelector('.js-form');
const input = form.querySelector('.js-input');
const admin = document.querySelector('.js-name');

function paintName(text){
    admin.innerHTML = `Hello ${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    const name = input.value;
    paintName(name);
}

function askForName(){
    form.addEventListener("submit", handleSubmit);
}

function getName(){
    const loaded = localStorage.getItem(USER);
    if (loaded===null) {
        // 저장된 이름이 없다면 그냥 form
    } else {
        loadName();
    }
}

function init(){

}

init();