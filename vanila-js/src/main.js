const root = document.getElementById('root');

// const h1 = document.createElement('h1');
// h1.textContent = "Vite + React";
//
// root.appendChild(h1);
let count = 0;

const button = document.createElement('button');
button.textContent = `count is ${count}`;

button.addEventListener('click', (e) => {
    count = count + 1;

    button.textContent = `count is ${count}`;
});

root.appendChild(button);
