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

/*today date*/

function TodayTime(){
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    document.getElementById('today-date').innerHTML = hh + ':' + mm;
}

let timerId = null;

function StartClock() {
    timerId = setTimeout(StartClock, 1000);
    TodayTime();
}
StartClock();
