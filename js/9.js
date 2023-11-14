function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';


}

function getHasil(comp, player) {
    if (player == comp) return 'Draw';
    if (player == 'gajah') return (comp == 'orang') ? 'Win' : 'Lose';
    if (player == 'orang') return (comp == 'semut') ? 'Win' : 'Lose';
    if (player == 'semut') return (comp == 'gajah') ? 'Win' : 'Lose';

}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }



        imgComputer.setAttribute('src', '../img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;


    }, 100)
}

const pick = document.querySelectorAll('li img');
pick.forEach(function (select) {
    select.addEventListener('click', function () {
        console.log(select);

        const pilihanComputer = getPilihanComputer();

        const pilihanPlayer = select.className;

        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();


        setTimeout(function () {

            const imgComputer = document.querySelector('.img-komputer');

            imgComputer.setAttribute('src', '../img/' + pilihanComputer + '.png')


            const info = document.querySelector('.info')
            info.innerHTML = hasil;

        }, 1000);



    });
});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();

//     const pilihanPlayer = pGajah.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', '../img/' + pilihanComputer + '.png')


//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;


// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();

//     const pilihanPlayer = pOrang.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', '../img/' + pilihanComputer + '.png')


//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;


// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();

//     const pilihanPlayer = pSemut.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');

//     imgComputer.setAttribute('src', '../img/' + pilihanComputer + '.png')


//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;


// });








