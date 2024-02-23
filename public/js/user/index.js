const iconPencilEl = document.querySelector('.pencil');
const iconCloseEl = document.querySelector('span.xmark');
const btnEditEl = document.querySelector('.btn-edit');
const editModeEl = document.querySelector('.edit-mode');
const iconContainerEl = document.querySelector('.icon-container');
const imgEl = document.querySelector('img');

const inputFileEl = document.querySelector('input[type="file"].input-file');
const inputEls = document.querySelectorAll('input.input');
const selectEl = document.querySelector('select');
const textareaEls = document.querySelectorAll('textarea');

iconPencilEl.addEventListener('click', () => {
    iconPencilEl.classList.add('hidden');

    iconCloseEl.classList.remove('hidden');

    editModeEl.classList.remove('hidden');

    iconContainerEl.classList.remove('justify-end');
    iconContainerEl.classList.add('justify-between');

    inputFileEl.classList.remove('hidden');

    inputEls.forEach((inputEl) => { 
        inputEl.readOnly = false;
        inputEl.parentElement.classList.add('is-valid');
    });

    selectEl.disabled = false;
    selectEl.parentElement.classList.add('is-valid');

    textareaEls.forEach((textareaEl) => {
        textareaEl.readOnly = false;
        textareaEl.parentElement.classList.add('is-valid');
    });

    btnEditEl.classList.remove('hidden');
});



iconCloseEl.addEventListener('click', () => {
    inputFileEl.value = '';

    iconPencilEl.classList.remove('hidden');

    iconCloseEl.classList.add('hidden');

    editModeEl.classList.add('hidden');

    iconContainerEl.classList.add('justify-end');
    iconContainerEl.classList.remove('justify-between');

    inputFileEl.classList.add('hidden');
    
    inputEls.forEach((inputEl, index) => { 
        inputEl.readOnly = true;
        inputEl.parentElement.classList.remove('is-valid');
    });
    
    selectEl.disabled = true;
    selectEl.parentElement.classList.remove('is-valid');
    
    textareaEls.forEach((textareaEl, index) => {
        textareaEl.readOnly = true;
        textareaEl.parentElement.classList.remove('is-valid');
    });

    btnEditEl.classList.add('hidden');
});