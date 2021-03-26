const toggleButton = document.getElementsByClassName('toggle-button')[0]
const wrapperLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    wrapperLinks.classList.toggle('active')
})