const node = document.querySelector('#page_header');

const $button = document.querySelector('#toggle');
$button.addEventListener('click', () => {
    node.classList.toggle('active');
});