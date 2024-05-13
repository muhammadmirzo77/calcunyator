const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';

        } else if (item.id == 'backspace') {
            let string = display.innerText.toLowerCase();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});


const themeToggleBtn = document.querySelector('.them-togglar');
const calculyator = document.querySelector('.calculyator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

const toggleTheme = () => {
    calculyator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};

themeToggleBtn.addEventListener('click', toggleTheme);




