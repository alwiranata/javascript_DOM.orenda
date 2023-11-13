//DOM Manipulation
//1.appendChild
//buat element baru
const pNew = document.createElement('p');
const textPBaru = document.createTextNode('New Paragraf');
//simpan tulisan ke dalam paragraf
pNew.appendChild(textPBaru);
//simpan pBaru di akhir Section A
const SectionA = document.getElementById('a');
SectionA.appendChild(pNew);


//2.insertBefore
//buat Element Baru
const liNew = document.createElement('li');
//simpan tulisan ke dalam li
const textLiNew = document.createTextNode('New Item');
//simpan tulisan ke dalam li
liNew.appendChild(textLiNew);
//parrent
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liNew, li2)


//3.removeChild
const link = document.getElementsByTagName('a')[0];
SectionA.removeChild(link);


//4.replaceChild
//section id b
const sectionB = document.getElementById('b');
//pilih paragraf yang akan ditukar
const p4 = sectionB.querySelector('p');

const h2New = document.createElement('h2');
const teksH2New = document.createTextNode('Judul Baru');

h2New.appendChild(teksH2New);

sectionB.replaceChild(h2New, p4)

pNew.style.color = 'tomato';
liNew.style.color = 'tomato';
h2New.style.color = 'tomato';
p4.style.color = 'tomato';

