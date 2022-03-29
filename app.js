const deg = 6;
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

function toggleClass() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
}

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

