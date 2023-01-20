function showMenu() {
    const button = document.querySelector('.burger-menu')
    const menu = document.querySelector('.menu')

    button.addEventListener('click', () => {
        menu.classList.toggle('show-menu-mobile')
    })
}
showMenu()