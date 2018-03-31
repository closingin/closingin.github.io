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
    var sidebar  = [
        document.querySelector('#description'),
        document.querySelector('#links')
    ];
    var articles = document.querySelectorAll('article > div');

    for (var i = 0; i < sidebar.length; i++) {
        sidebar[i].style.opacity   = 1;
        sidebar[i].style.transform = 'translateY(0)';
    }

    for (var i = 0; i < articles.length; i++) {
        articles[i].style.opacity   = 1;
        articles[i].style.transform = 'translateY(0)';
    }

    var menu        = document.querySelector('header nav');
    var menuItems   = document.querySelectorAll('header nav a');
    var menuToggler = document.querySelector('header .menu-toggle');

    var aside = document.querySelector('aside');
    var main  = document.querySelector('main');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.remove('active');
            menuToggler.classList.remove('active');

            unblur([aside, main]);

            document.querySelector(e.target.hash).scrollIntoView({
                behavior: 'smooth'
            });
        })
    }

    menuToggler.addEventListener('click', function(e) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggler.classList.remove('active');
            unblur([aside, main]);
        } else {
            menu.classList.add('active');
            menuToggler.classList.add('active');
            blur([aside, main]);
        }
    });
})();
