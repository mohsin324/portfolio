// Getting DOM element
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll  ('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
// event listener
hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var scrollPositon = window.scrollY;
    // console.log(scrollPositon);
    if(scrollPositon > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent'
    }
});

menuItem.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    })
})