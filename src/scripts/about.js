function redirectHome() {
    const btn = document.querySelector('#home')
    console.log(btn)

    btn.addEventListener('click', () => {
        location.replace('/')
    })
}
redirectHome()