import { redirectAbout } from './about.js'

export function showMenu() {
    const button = document.querySelector('.burger-menu')
    const menu = document.querySelector('.menu')

    button.addEventListener('click', () => {
        console.log('clicou no menu')
        menu.classList.toggle('show-menu-mobile')
    })
}
showMenu()

export function rendirectHome() {
    const btn = document.getElementById('home')
    
    btn.addEventListener('click', () => {
        console.log('oi')
        location = '/index.html' 
    })
}

redirectAbout()