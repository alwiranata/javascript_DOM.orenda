//event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

//DOM Traversal

// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// const close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// })

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function () {
//         alert('ok');
//     });
// })

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {

        e.target.parentElement.style.display = 'none';
    }
});