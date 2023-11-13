const tombol = document.getElementById('tUbahWarna');
tombol.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'aquamarine';
    // document.body.setAttribute('class' ,'biru-muda')
    document.body.classList.toggle('biru-muda')
});

const tRandomColor = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tRandomColor.appendChild(textTombol);
tRandomColor.setAttribute('type', 'button');

tUbahWarna.after(tRandomColor)

tRandomColor.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sm = document.querySelector('input[name=sm]');
const sh = document.querySelector('input[name=sh]');
const sb = document.querySelector('input[name=sb]');

sm.addEventListener('input', function () {
    const r = sm.value
    const g = sh.value
    const b = sb.value
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',  ' + b + ')';
});

sh.addEventListener('input', function () {
    const r = sm.value
    const g = sh.value
    const b = sb.value
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',  ' + b + ')';
});

sb.addEventListener('input', function () {
    const r = sm.value
    const g = sh.value
    const b = sb.value
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',  ' + b + ')';
});


document.body.addEventListener('mousemove', function (event) {
    //posisi mouse
    // console.log(event.clientX)
    // //ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);

    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + 100 + ')';
});
