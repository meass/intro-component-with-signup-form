"use strict";
const submitBtn = document.querySelector('#submit');
const fields = document.querySelectorAll('input');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const form = document.querySelector('#form');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let isValid = false;
    fields.forEach(field => {
        isValid = validateFields(field);
    });
    if (isValid) {
        form.reset();
    }
});
fields.forEach(field => {
    field.addEventListener('input', () => {
        validateFields(field);
    });
});
const validateFields = (field) => {
    const parentField = field.parentNode;
    const parentSibling = parentField.nextSibling;
    const errSpan = parentSibling.nextSibling;
    const errImg = field.nextElementSibling;
    let isValid = false;
    if (field.value === '') {
        errSpan.classList.add('active');
        errImg.classList.add('active');
    }
    else if (field.id === 'email' && !emailRegex.test(field.value)) {
        errSpan.classList.add('active');
        errImg.classList.add('active');
        errSpan.textContent = 'Looks like this is not an email';
    }
    else {
        errSpan.classList.remove('active');
        errImg.classList.remove('active');
        isValid = true;
    }
    return isValid;
};
