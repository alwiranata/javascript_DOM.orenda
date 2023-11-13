//getElemntById() (mencari ID)
//getElementsByTagName() (mencari nama tag tertentu)
//getElementsByClassName() (carikan element yang memiliki calss tertentu)
//querySelector()
//querySelectorAll()

//DOM selection

//document.getElementById() --> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = "Aldo Wiranata"

//document.getElementsByTagName()
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'aquamarine';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '30px';

//document.getElementsByClassName()
//-->HTMLcollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari JS';
