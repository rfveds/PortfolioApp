const openButton = document.querySelector('.open-window')
const closeButton = document.querySelector('.window__button--close')
const popUp = document.querySelector('.window')
const hamburger = document.querySelector('.hamburger')
const menuMobile = document.querySelector('.menu--mobile')

function openPopUp() {
    popUp.style.display = 'block'
}

function closePopUp() {
    popUp.style.display = 'none'
}

function showHamburger() {
    if(menuMobile.style.display === 'block'){
        menuMobile.style.display = 'none'
    }else {
        menuMobile.style.display = 'block'
    }
}

openButton.addEventListener('click', () => {
    openPopUp()
})

closeButton.addEventListener('click', () => {
    closePopUp()
})

hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    showHamburger()
})