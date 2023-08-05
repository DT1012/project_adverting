const completed = document.querySelector('.completed')
const members = document.querySelector('.members')
const hours = document.querySelector('.hours')
const won = document.querySelector('.won')
let elToShow = document.querySelector('.show-on-scroll');
console.log(completed)
    // counter
let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        // rect.top >= 0 && rect.bottom <= viewHeight
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)

    );
};

function loop() {
    if (isElInViewPort(elToShow)) {
        counterUp(completed, 250)
        counterUp(members, 320)
        counterUp(hours, 15)
        counterUp(won, 99);
    }

}

window.onscroll = loop;
loop()

function counterUp(el, to) {
    let speed = 200;
    let from = 0;
    let step = to / speed;
    const counter = setInterval(function() {
        from += step;
        if (from > to) {
            clearInterval(counter);
            el.innerText = to;
        } else {
            el.innerText = Math.ceil(from);
        }
    }, 1);
}