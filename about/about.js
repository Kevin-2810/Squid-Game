const andrewImg = document.getElementById('andrew-img');
const indyImg = document.getElementById('indy-img');
const kevinImg = document.getElementById('kevin-img');
const phoenixImg = document.getElementById('phoenix-img');

andrewImg.addEventListener('click', () => {
    andrewImg.src = '../assets/f2.png';
});
indyImg.addEventListener('click', () => {
    indyImg.src = '../assets/s2.png';
});
kevinImg.addEventListener('click', () => {
    kevinImg.src = '../assets/t2.png';
});
phoenixImg.addEventListener('click', () => {
    phoenixImg.src = '../assets/c2.png';
});