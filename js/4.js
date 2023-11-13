//getElemntById() (mencari ID)
//getElementsByTagName() (mencari nama tag tertentu)
//getElementsByClassName() (carikan element yang memiliki class tertentu)
//querySelector()
//querySelectorAll()

//dom Selection
//document.querySelector() -->element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'tomato';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = "tomato";

// // const p = document.querySelector('p');
// // p.innerHTML = 'ini diubah melalui JS';

// //document.querySelectorAll() -->semua element(node list)
// const p = document.querySelectorAll('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.backgroundColor = 'tomato';