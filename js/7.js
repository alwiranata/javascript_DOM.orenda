// //Event Handler

// //p3. onclick dari html 
// const p3 = document.querySelector('.p3');
// function changeColor() {
//     p3.style.backgroundColor = 'lightblue';
// }

// //p2. onclick dari JS 
// function changeColor2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = changeColor2;

// //addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {

//     const ul = document.querySelector('section#b ul');
//     const liNew = document.createElement('li');
//     const textLiNew = document.createTextNode('New text');
//     liNew.appendChild(textLiNew);
//     liNew.style.color = "tomato";
//     ul.appendChild(liNew)

// });


// p3.onclick = function () {
//     p3.style.backgroundColor = 'tomato';
// }

// p3.onclick = function () {
//     p3.style.color = 'lightblue';
// }
const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});
