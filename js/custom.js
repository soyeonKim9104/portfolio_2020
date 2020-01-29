/*top button*/
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*fullscreen menu*/
function menuToggle() {
    let nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');

    let nav2 = document.getElementById('toggleIcon');
    nav2.classList.toggle('active');

    //document.getElementsByTagName('body').style.overflow = "hidden";
}

/*rotate text*/
const text = document.getElementById('text');
let word = text.getElementsByTagName('span');

let i =0;

function rotator() {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator, 900);

/*today time*/
function TodayTime(){
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    if(mm < 10){
        document.getElementById('today-date').innerHTML = hh + ':' + '0' + mm;
    }else{
        document.getElementById('today-date').innerHTML = hh + ':' + mm;
    }
}

let timerId = null;

function StartClock() {
    timerId = setTimeout(StartClock, 1000);
    TodayTime();
}
StartClock();

/*section counting*/
function secCount() {
    let secArea = document.querySelectorAll('.sec_num');
    let secTotal = secArea.length;
    let numberPrint = '';
    for (let i = 0; i < secTotal; i++) {
        numberPrint = i + 1;
        if(i<9){
            secArea[i].innerHTML = '0' + numberPrint;
        }else{
            secArea[i].innerHTML = numberPrint;
        }
    }
}
secCount();

/*portfolio animation*/
/*const delayPosition = 200;
let windowHeight = window.innerHeight;

window.addEventListener('resize',function () {
    insertTargetPosition();
});

window.addEventListener('scroll',function () {
    let position = window.scrollTop + windowHeight - delayPosition;
    let boxYetArea = document.querySelectorAll('.box.ready');
    let chkSection = boxYetArea.classList.contains('active');

    for(let i = 0; i < boxYetArea.length; i++){
        if(!chkSection && boxYetArea.offsetTop < position){
            boxYetArea[i].classList.add('active');
            boxYetArea[i].classList.remove('ready');
        }
    }
});

function insertTargetPosition() {
    let boxArea = document.querySelectorAll('.box');

    for(let i = 0; i < boxArea.length; i++){
        boxArea[i].offsetTop;
    }
}

(function init() {
    insertTargetPosition();
})();*/
