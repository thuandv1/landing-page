const headerWrapper = document.querySelector('.header__wrapper')
const menuBtn = document.querySelector('.menu-icon')
const navBar = document.querySelector('.navbar')

let heightBrowser = Number(window.innerHeight - window.innerHeight * 0.9) //10vh

window.onscroll = () => {
    if (window.scrollY < heightBrowser || window.scrollY === 0) {
        headerWrapper.classList.remove('scrolled')
    } else {
        headerWrapper.classList.add('scrolled')
    }
}

menuBtn.onclick = () => {
    navBar.classList.toggle('nav-mobile')
    menuBtn.classList.toggle('nav-mobile')
}
