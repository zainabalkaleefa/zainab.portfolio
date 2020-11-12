const hamburger =document.querySelector('.header .navBar .navList .hamburger');
const mobileMenu =document.querySelector('.header .navBar .navList ul');
const menuItem =document.querySelectorAll('.header .navBar .navList ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItem.forEach(item=>{
  item.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');  
  })  
})