const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const work_nav = $$('.work-nav-item');
const work_box = $$('.work-box-list');
const retangle = $('.work-nav .retangle3')

const completed = $('.completed')
const members = $('.members')
const hours = $('.hours')
const won = $('.won')
let elToShow = $('.show-on-scroll');


// filter
work_nav.forEach((nav) => {

    nav.addEventListener('click', function(e) {
        $('.work-nav-item.active').classList.remove("active");

        retangle.style.left = this.offsetLeft + "px";
        retangle.style.width = this.offsetWidth + "px";

        e.target.classList.add('active');
        const type = e.target.getAttribute('type-word')
        work_box.forEach((item) => {
            if (type == 'all' || item.getAttribute('type-word').includes(type)) item.classList.remove('hide')
            else item.classList.add('hide')
        })
    })
})

// counter
let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top >= 0 && rect.bottom <= viewHeight
        // (rect.top <= 0 && rect.bottom >= 0) ||
        // (rect.bottom >= viewHeight && rect.top <= viewHeight)
        // (rect.top >= 0 && rect.bottom <= viewHeight)

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