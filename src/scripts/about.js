import { showMenu } from './index.js'

export function redirectAbout() {
    const btn = document.querySelector('#about')
    console.log(btn)

    btn.addEventListener('click', () => {
        setTimeout(() => {

            location.replace('/src/pages/about.html')

        }, 300)
    })
}
redirectAbout()

export function rendirectHome() {
    const btn = document.querySelector('#home')
    console.log(btn)
    
    btn.addEventListener('click', () => {
        console.log('oi')
        location.replace('/')
    })
}
rendirectHome()
showMenu()