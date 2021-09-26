const dateObject = new Date();
const today = dateObject.getDate();
const thisYear = dateObject.getFullYear();
const thisMonth = dateObject.getMonth();

const headerDate = document.querySelector('.mycss-header__date');
const headerYear = document.querySelector('.mycss-header__year');
const headerMonth = document.querySelector('.mycss-header__month');

const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

headerDate.innerText = today;
headerYear.innerText = thisYear;
headerMonth.innerText = monthList[thisMonth];

// header

const plusButton = document.querySelector('.forjs-plus-button');
const template = document.querySelector('.forjs-template');
const listWindow = document.querySelector('.forjs-list-window');
const inputText = document.querySelector('.forjs-input-text');

plusButton.addEventListener('click', function () {
    if(inputText.value == ''){
        alert('내용을 입력해주세요');
        return;
    }
    const cloneTemplate = document.importNode(template.content, true);
    const listName = cloneTemplate.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
    listName.innerText = inputText.value;
    listWindow.append(cloneTemplate);
    inputText.value = "";
})

inputText.addEventListener('keypress', function (e) {
    if (e.keyCode == '13') {
        if(inputText.value == ''){
            alert('내용을 입력해주세요');
            return;
        }
        const cloneTemplate = document.importNode(template.content, true);
        const listName = cloneTemplate.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
        listName.innerText = inputText.value;
        listWindow.append(cloneTemplate);
        inputText.value = ""
    };
})
const ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
        if(e.target.classList.contains('forjs-label')){
            e.target.firstElementChild.firstElementChild.nextElementSibling.classList.toggle('checkbox-toggle');
            e.target.firstElementChild.nextElementSibling.classList.toggle('p-checked');
        }
        else if(e.target.classList.contains('forjs-list-checkbox')){
            e.target.firstElementChild.nextElementSibling.classList.toggle('checkbox-toggle');
            e.target.nextElementSibling.classList.toggle('p-checked');
        }
        else if(e.target.classList.contains('checkbox-checked')){
            e.target.classList.toggle('checkbox-toggle');
            e.target.parentElement.nextElementSibling.classList.toggle('p-checked');
        }
        else if(e.target.classList.contains('forjs-list-name')){
            e.target.previousElementSibling.firstElementChild.nextElementSibling.classList.toggle('checkbox-toggle');
            e.target.classList.toggle('p-checked');
        }
        // toggle-line-through

        else if(e.target.classList.contains('forjs-star-button1')){
            e.target.firstElementChild.firstElementChild.classList.toggle('star-toggle');
            if(e.target.firstElementChild.firstElementChild.classList.contains('star-toggle')){
                const cloneList = e.target.parentElement.cloneNode(true);
                ul.prepend(cloneList);
                e.target.parentElement.remove();
            }
        }
        else if(e.target.classList.contains('forjs-star-button2')){
            e.target.firstElementChild.classList.toggle('star-toggle');
            if(e.target.firstElementChild.classList.contains('star-toggle')){
                const cloneList = e.target.parentElement.parentElement.cloneNode(true);
                ul.prepend(cloneList);
                e.target.parentElement.parentElement.remove();
            }
        }
        else if(e.target.classList.contains('forjs-star-button3')){
            e.target.classList.toggle('star-toggle');
            if(e.target.classList.contains('star-toggle')){
                const cloneList = e.target.parentElement.parentElement.parentElement.cloneNode(true);
                ul.prepend(cloneList);
                e.target.parentElement.parentElement.parentElement.remove();
            }
        }

        // toggle-star
        else if(e.target.classList.contains('forjs-minus-button1')){
            e.target.parentElement.remove();
        }
        else if(e.target.classList.contains('forjs-minus-button2')){
            e.target.parentElement.parentElement.remove();
        }
        else if(e.target.classList.contains('forjs-minus-button3')){
            e.target.parentElement.parentElement.parentElement.remove();
        }
        // delete-button
    })