import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);

const FEEDBACK_STORAGE_KEY = "feedback-form-state";
let formData = {};

refs.form.addEventListener('input', throttle((e) => {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData))
},500));

saveMessage();

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    console.log(formData)
};


function saveMessage(){
    const message = localStorage.getItem(FEEDBACK_STORAGE_KEY);
        if(message){
        formData = JSON.parse(message || '{}');
        refs.mail.value = formData.email;
        refs.textarea.value = formData.message;
        }
}
