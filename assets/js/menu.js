const  btnMenu = document.getElementById('list-icon');
const menu = document.getElementById('mobile-navBar');
const overlay = document.getElementById('overlay-opacity');

btnMenu.addEventListener('click',()=> {
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click',()=> {
    menu.classList.remove('abrir-menu');
})

overlay.addEventListener('click',()=> {
    menu.classList.remove('abrir-menu');
})