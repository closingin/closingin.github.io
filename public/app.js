/*
** Written by closingin.
*/

function blur(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('faded');
    }
}

function unblur(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('faded');
    }
}

(function() {
    var description = document.querySelector('#description');
    description.style.opacity = 1;
    description.style.transform = 'translateY(0)';

    var links = document.querySelector('#links');
    links.style.opacity = 1;
    links.style.transform = 'translateY(0)';

    // var projects = document.querySelector('#projects > div');
    // projects.style.opacity   = 1;
    // projects.style.transform = 'translateY(-50%)';

    var education = document.querySelector('#education > div');
    education.style.opacity   = 1;
    education.style.transform = 'translateY(0)';

    var contact = document.querySelector('#contact > div');
    contact.style.opacity   = 1;
    contact.style.transform = 'translateY(0)';

    var menu        = document.querySelector('header nav');
    var menuItems   = document.querySelectorAll('header nav a');
    var menuToggler = document.querySelector('header .menu-toggle');

    var sections = document.querySelectorAll('section');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.remove('active');
            menuToggler.classList.remove('active');

            unblur(sections);

            document.querySelector(e.target.hash).scrollIntoView({
                behavior: 'smooth'
            });
        })
    }

    menuToggler.addEventListener('click', function(e) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggler.classList.remove('active');
            unblur(sections);
        } else {
            menu.classList.add('active');
            menuToggler.classList.add('active');
            blur(sections);
        }
    });
})();
