// Hover effect
let select = document.querySelector('.select');
let icon = document.querySelector('#icon');

select.addEventListener('mouseover', () => {
    icon.style.color = '#131921';
});

select.addEventListener('mouseout', () => {
    icon.style.color = '';
})

// Border effect 
// BackGround effect
let input = document.querySelector('.input-effect');
let searchBox = document.querySelector('.search-box-effect');
let inputRes = document.querySelector('.input-res-effect');
let boxRes = document.querySelector('.box-res-effect');
let bgOpactity = document.querySelector('.bg-opacity');

input.addEventListener('focus', () => {
    searchBox.style.boxShadow = '0 0 0 3px #f08804';
    bgOpactity.style.display = 'flex';
});

input.addEventListener('blur', () => {
    searchBox.style.boxShadow = '';
    bgOpactity.style.display = '';
});

inputRes.addEventListener('focus', () => {
    boxRes.style.boxShadow = '0 0 0 3px #f08804';
    bgOpactity.style.display = 'flex';
});

inputRes.addEventListener('blur', () => {
    boxRes.style.boxShadow = '';
    bgOpactity.style.display = '';
});

// Side Menu
let body = document.querySelector('body');
let sidemenubg = document.querySelector('.side-menu-bg');;
let sidemenu = document.querySelector('.side-menu');
let closemenu = document.querySelector('.close');


function opensidemenu() {
    sidemenubg.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
        sidemenubg.style.opacity = "0.80";
        sidemenu.style.left = "0";
        closemenu.style.opacity = "1";
    }, 150)
}

function closesidemenu() {
    body.style.overflow = "";
    sidemenu.style.left = "";
    closemenu.style.opacity = "";
    sidemenubg.style.opacity = "";
    setTimeout(() => {
        sidemenubg.style.display = "";
    }, 250)
}

// Side Menu
let sidemenubgRes = document.querySelector('.side-menu-bg-res');;
let sidemenuRes = document.querySelector('.side-menu-res');
let closemenuRes = document.querySelector('.close-res');

function opensidemenuRes() {
    sidemenubgRes.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
        sidemenubgRes.style.opacity = "0.80";
        sidemenuRes.style.left = "0";
        closemenuRes.style.opacity = "1";
    }, 150)
}

function closesidemenuRes() {
    body.style.overflow = "";
    sidemenuRes.style.left = "";
    closemenuRes.style.opacity = "";
    sidemenubgRes.style.opacity = "";
    setTimeout(() => {
        sidemenubgRes.style.display = "";
    }, 250)
}

// Location
let locationbg = document.querySelector('.location-w-bg');;
let loactionbox = document.querySelector('.loaction-box');
let locationclose = document.querySelector('.location-close');

function openlocation() {
    locationbg.style.display = "flex";
    loactionbox.style.display = "flex";
    locationclose.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
        locationbg.style.opacity = "0.80";
        loactionbox.style.bottom = "0";
        locationclose.style.opacity = "1";
    }, 250)
}

function closelocation() {
    body.style.overflow = "";
    locationbg.style.opacity = "";
    loactionbox.style.bottom = "";
    locationclose.style.opacity = "";
    setTimeout(() => {
        locationbg.style.display = "";
        loactionbox.style.display = "";
        locationclose.style.display = "";
    }, 500)
}

// Background Slider
let sliders = document.querySelectorAll('.bg-img.slider');
let counter = 0;
const maxCounter = sliders.length - 1;

// Set initial positions of images
sliders.forEach((slider, index) => {
    const offset = (index - counter) * 100;
    slider.style.transform = `translateX(${offset}%)`;
});

function goprev() {
    counter = (counter === 0) ? maxCounter : counter - 1;
    sliderImage();
}

function gonext() {
    counter = (counter === maxCounter) ? 0 : counter + 1;
    sliderImage();
}

function sliderImage() {
    sliders.forEach((slider, index) => {
        const offset = (index - counter) * 100;
        slider.style.transform = `translateX(${offset}%)`;
    });
}

// Row's Slider
function scrollToLeft1() {
    var box = document.getElementById('scrollBox1');
    box.scrollTo({
        left: box.scrollLeft - 1180,
        behavior: 'smooth'
    });
    box.classList.add('scroll-hover');
}

function scrollToRight1() {
    var box = document.getElementById('scrollBox1');
    box.scrollTo({
        left: box.scrollLeft + 1180,
        behavior: 'smooth',
    });
    box.classList.add('scroll-hover');
}

function removeHoverClass() {
    var box = document.getElementById('scrollBox1');
    box.classList.remove('scroll-hover1');
}

document.querySelector('.left').addEventListener('mouseenter', scrollToLeft1);
document.querySelector('.left').addEventListener('mouseleave', removeHoverClass);
document.querySelector('.right').addEventListener('mouseenter', scrollToRight1);
document.querySelector('.right').addEventListener('mouseleave', removeHoverClass);

function scrollToLeft2() {
    var box = document.getElementById('scrollBox2');
    box.scrollTo({
        left: box.scrollLeft - 1120,
        behavior: 'smooth'
    });
    box.classList.add('scroll-hover');
}

function scrollToRight2() {
    var box = document.getElementById('scrollBox2');
    box.scrollTo({
        left: box.scrollLeft + 1150,
        behavior: 'smooth',
    });
    box.classList.add('scroll-hover');
}

function removeHoverClass() {
    var box = document.getElementById('scrollBox2');
    box.classList.remove('scroll-hover1');
}

document.querySelector('.left').addEventListener('mouseenter', scrollToLeft2);
document.querySelector('.left').addEventListener('mouseleave', removeHoverClass);
document.querySelector('.right').addEventListener('mouseenter', scrollToRight2);
document.querySelector('.right').addEventListener('mouseleave', removeHoverClass);

function scrollToLeft3() {
    var box = document.getElementById('scrollBox3');
    box.scrollTo({
        left: box.scrollLeft - 1350,
        behavior: 'smooth'
    });
    box.classList.add('scroll-hover');
}

function scrollToRight3() {
    var box = document.getElementById('scrollBox3');
    box.scrollTo({
        left: box.scrollLeft + 1350,
        behavior: 'smooth',
    });
    box.classList.add('scroll-hover');
}

function removeHoverClass() {
    var box = document.getElementById('scrollBox3');
    box.classList.remove('scroll-hover1');
}

document.querySelector('.left').addEventListener('mouseenter', scrollToLeft3);
document.querySelector('.left').addEventListener('mouseleave', removeHoverClass);
document.querySelector('.right').addEventListener('mouseenter', scrollToRight3);
document.querySelector('.right').addEventListener('mouseleave', removeHoverClass);

function scrollToLeft4() {
    var box = document.getElementById('scrollBox4');
    box.scrollTo({
        left: box.scrollLeft - 1100,
        behavior: 'smooth'
    });
    box.classList.add('scroll-hover');
}

function scrollToRight4() {
    var box = document.getElementById('scrollBox4');
    box.scrollTo({
        left: box.scrollLeft + 1100,
        behavior: 'smooth',
    });
    box.classList.add('scroll-hover');
}

function removeHoverClass() {
    var box = document.getElementById('scrollBox4');
    box.classList.remove('scroll-hover1');
}

document.querySelector('.left').addEventListener('mouseenter', scrollToLeft4);
document.querySelector('.left').addEventListener('mouseleave', removeHoverClass);
document.querySelector('.right').addEventListener('mouseenter', scrollToRight4);
document.querySelector('.right').addEventListener('mouseleave', removeHoverClass);

function scrollToLeft5() {
    var box = document.getElementById('scrollBox5');
    box.scrollTo({
        left: box.scrollLeft - 1225,
        behavior: 'smooth'
    });
    box.classList.add('scroll-hover');
}

function scrollToRight5() {
    var box = document.getElementById('scrollBox5');
    box.scrollTo({
        left: box.scrollLeft + 1225,
        behavior: 'smooth',
    });
    box.classList.add('scroll-hover');
}

function removeHoverClass() {
    var box = document.getElementById('scrollBox5');
    box.classList.remove('scroll-hover1');
}

document.querySelector('.left').addEventListener('mouseenter', scrollToLeft5);
document.querySelector('.left').addEventListener('mouseleave', removeHoverClass);
document.querySelector('.right').addEventListener('mouseenter', scrollToRight5);
document.querySelector('.right').addEventListener('mouseleave', removeHoverClass);

// Bg image Responsive
let imageUrls = ["bg-res-1.jpg", "bg-res-2.jpg", "bg-res-3.jpg", "bg-res-4.jpg"]
let currentindex = 0;

function changeImageOpacity() {
    let images = document.querySelectorAll('.image');
    images.forEach(function (image) {
        image.style.opacity = "0";
    });
    images[currentindex].style.opacity = "1";
    currentindex = (currentindex + 1) % imageUrls.length;
}

setInterval(changeImageOpacity, 4000);

// Right Click Disable
document.addEventListener('contextmenu', event =>
    event.preventDefault());