const $saveBtn = document.getElementById('save-btn');
const $resetBtn = document.querySelector('#reset-btn');
const $cancelBtn = document.querySelector('#cancel-btn');

const $cancelBtnContainer = document.querySelector('.buttons-container');

const $button = document.createElement('button');
$button.textContent = 'Custom button';

$cancelBtnContainer.appendChild($button);

function subscribeTo(element, eventName, callBack){
    if (element && callBack && eventName) {
        element.addEventListener(eventName, callBack);
    } else if (element && callBack) {
        element.addEventListener('click', callBack);
    }
}

const cb = (event) => {
    alert('Cancel VanilaJS');
    console.log(event.target, event.currentTarget);
};

subscribeTo($saveBtn, 'click', cb);
subscribeTo($resetBtn, 'mouseover', cb);
subscribeTo($cancelBtn, 'dblclick', cb);