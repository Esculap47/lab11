let navButton = document.getElementById('nav-button'),
    nav = document.getElementById('nav-h');

navButton.addEventListener('click', function (e) {

    if (nav.style.display == '') {
        nav.style.cssText = `display: flex;`;
    } else if (nav.style.display == 'flex') {
        nav.style.cssText = `display: none;`;
    } else if (nav.style.display == 'none') {
        nav.style.cssText = `display: flex;`;
    }
    console.log(nav.style.display)
    nav.classList.toggle('open');
});