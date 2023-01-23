import { showMenu, rendirectHome } from './index.js'

const btnHome = document.querySelector('#home')
const btn = document.querySelector('#about')

export function redirectAbout() {
        
    // btnHome.addEventListener('click', () => {
    //     setTimeout(() => { location = '/index.html' }, 300)
    // })

    btn.addEventListener('click', () => {
        setTimeout(() => { location = '/src/pages/about.html' }, 300)
    })
}

redirectAbout()
rendirectHome()
showMenu()