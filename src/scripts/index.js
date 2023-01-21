import { redirectAbout, rendirectHome } from './about.js'

export function showMenu() {
    const button = document.querySelector('.burger-menu')
    const menu = document.querySelector('.menu')

    button.addEventListener('click', () => {
        console.log('clicou no menu')
        menu.classList.toggle('show-menu-mobile')
    })
}
showMenu()

redirectAbout()
rendirectHome()