let navbarDiv = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 
    || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
});

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active'); 
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

const prevIcon = '<span class="prev"><i class="fa-solid fa-arrow-up"></i></span>';
const nextIcon = '<span class="next"><i class="fa-solid fa-arrow-down"></i></span>';

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 95;
let speed = 20;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #c01b68 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

let progress_bar = document.querySelector(".circular-progress1");
let value_container = document.querySelector(".value-container1");

let progress_value = 0;
let progress_end_value = 85;
let seed = 20;

let progrss = setInterval(() => {
    progress_value++;
    value_container.textContent = `${progress_value}%`;
    progress_bar.style.background = `conic-gradient(
        #c01b68 ${progress_value * 3.6}deg,
        #cadcff ${progress_value * 3.6}deg
    )`;
    if (progress_value == progress_end_value) {
        clearInterval(progrss);
    }
}, seed);

let progresBar = document.querySelector(".circular-progress2");
let valueCntainer = document.querySelector(".value-container2");

let progresValue = 0;
let progresEndValue = 60;
let sped = 20;

let progess = setInterval(() => {
    progresValue++;
    valueCntainer.textContent = `${progresValue}%`;
    progresBar.style.background = `conic-gradient(
        #c01b68 ${progresValue * 3.6}deg,
        #cadcff ${progresValue * 3.6}deg
    )`;
    if (progresValue == progresEndValue) {
        clearInterval(progess);
    }
}, sped);


const buttom = document.querySelectorAll(".buttom");

buttom.forEach((buttom) => {
    buttom.addEventListener("click", () => {
        buttom.classList.toggle("active");
    });
});


const modeToggleBtn = document.getElementById('theme-toggle-btn');

modeToggleBtn.addEventListener('click', () =>{
    if(modeToggleBtn.checked){
        document.querySelector('body').classList.add('dark-mode');
        localStorage.setItem("darkmode", "on")
    } else {
        document.querySelector('body').classList.remove('dark-mode');
        localStorage.setItem("darkmode", "off")
    }
});


