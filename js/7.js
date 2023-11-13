//p3.dari html
const p3 = document.querySelector('.p3');
function changeColor() {
    p3.style.backgroundColor = 'lightblue';
}

//p2.dari JS
function changeColor2() {
    p2.style.backgroundColor = 'lightblue';
}
const p2 = document.querySelector('.p2');
p2.onclick = changeColor2;
