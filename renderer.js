const {createWindow} = require('./main')
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert("Hii Bro, Whats'up!");
    createWindow(); // Access the exposed API
});