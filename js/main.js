/* ===== Components ==== */
const body = document.getElementById('body')
const menuNav = document.getElementById('nav__menu')


/* ===== ICONS =====  */
const iconMultiBox = document.getElementById('icon--multibox')
const iconMoon = document.getElementById('icon--moon')
const iconSun = document.getElementById('icon--sun')
const iconClose = document.getElementById('icon--close')

/* ======== FUNCIONES ======= */
const toggleShowMenu = () => {
    iconMultiBox.classList.toggle('hidden')
    iconClose.classList.toggle('show')
    menuNav.classList.toggle('menu--show')
}

const toggleTheme = () => {
    body.classList.toggle('darkTheme')
    iconSun.classList.toggle('show')
    iconMoon.classList.toggle('hidden')
}

/*========= EVENTOS ======== */

iconMultiBox.addEventListener('click', toggleShowMenu )
iconClose.addEventListener('click', toggleShowMenu )


iconMoon.addEventListener('click', toggleTheme )
iconSun.addEventListener('click', toggleTheme )