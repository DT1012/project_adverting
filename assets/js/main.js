const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const work_nav = $$('.work-nav-item');
const work_box = $$('.work-box-list');
// console.log(work_box, work_nav);
const navActive = $('.work-nav-item.active');
const retangle = $('.work-nav .retangle3');
const navALl = $('.work-nav-item.all');
const navCpm = $('.work-nav-item.cpm');

requestIdleCallback(function() {
    retangle.style.left = navActive.offsetLeft + "px";
    retangle.style.width = navActive.offsetWidth + "px";
});
const all = $$('.work-box-list.all');
const cpm = $$('.work-box-list.cpm');
const pr = $$('.work-box-list.pr');
const phygital = $$('.work-box-list.phygital');
const email = $$('.work-box-list.email');
const creative = $$('.work-box-list.creative');


const box = [all, cpm, pr, phygital, email, creative];
console.log(box);
work_nav.forEach((nav, index) => {
    nav.onclick = function() {
        $('.work-nav-item.active').classList.remove("active");
        $('.work-box-list.active').classList.remove("active");

        retangle.style.left = this.offsetLeft + "px";
        retangle.style.width = this.offsetWidth + "px";

        this.classList.add('active');

        box[index].classList.toggle('active');
    }
});