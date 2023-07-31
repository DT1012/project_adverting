const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const work_nav = $$('.work-nav-item');
const work_box = $$('.work-box-list');
const retangle = $('.work-nav .retangle3')

const show = $('.showall');
// filter
work_nav.forEach((nav) => {

    nav.addEventListener('click', function(e) {
        $('.work-nav-item.active').classList.remove("active");

        retangle.style.left = this.offsetLeft + "px";
        retangle.style.width = this.offsetWidth + "px";

        e.target.classList.add('active');
        const type = e.target.getAttribute('type-word')
        work_box.forEach((item) => {
            if (type == 'all' || item.getAttribute('type-word').includes(type)) item.classList.add('hide')
            else item.classList.remove('hide')
        })
    })
})


show.addEventListener('click', () => {
    work_box.forEach((item) => {
        if (!item.classList.contains('hide')) item.classList.add('hide')
    })
    show.style = 'display:none';
})