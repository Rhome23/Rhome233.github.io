const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');
const wrapper3 = document.querySelector('.wrapper3');
const loginLink = document.querySelector('.login-link');
const loginLink1 = document.querySelector('.login-link1');
const registerLink = document.querySelector('.register-link');
const registerLink1 = document.querySelector('.register-link1');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnPopup1 = document.querySelector('.btnLogin-popup1');
const btnPopup2 = document.querySelector('.btnLogin-popup2');
const iconClose = document.querySelector('.icon-close');
const iconClose1 = document.querySelector('.icon-close1');
const iconClose2 = document.querySelector('.icon-close2');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

registerLink1.addEventListener('click', ()=> {
    wrapper2.classList.add('active');
});
loginLink1.addEventListener('click', ()=> {
    wrapper2.classList.remove('active');
});
btnPopup1.addEventListener('click', ()=> {
    wrapper2.classList.add('active-popup');
});
btnPopup2.addEventListener('click', ()=> {
    wrapper3.classList.add('active-popup');
});
iconClose1.addEventListener('click', ()=> {
    wrapper2.classList.remove('active-popup');
});
iconClose2.addEventListener('click', ()=> {
    wrapper3.classList.remove('active-popup');
});