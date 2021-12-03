/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}
showMenu('bx','menu-mobile')







/*==================== DROPDOWN MENU ====================*/
const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

function ShowDropdown1(event){
    event.preventDefault();
    dropdownMenu1.classList.toggle('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown2(event){
    event.preventDefault();
    dropdownMenu2.classList.toggle('active-dropdown-menu');
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown3(event){
    event.preventDefault();
    dropdownMenu3.classList.toggle('active-dropdown-menu');
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
}

function RemoveDropdown(){
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
    outSideClick()
}

menuItem1.addEventListener('click', ShowDropdown1);
menuItem2.addEventListener('click', ShowDropdown2);
menuItem3.addEventListener('click', ShowDropdown3);

dropdownMenu1.addEventListener(('mouseleave'), RemoveDropdown);
dropdownMenu2.addEventListener(('mouseleave'), RemoveDropdown);
dropdownMenu3.addEventListener(('mouseleave'), RemoveDropdown);







/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link-mobile')

function linkAction(){
    const navMenu = document.getElementById('menu-mobile')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active-menu-mobile')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
/*function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)*/

