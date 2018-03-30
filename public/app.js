/*
** Written by closingin.
*/

(function() {
    var description = document.querySelector('#description');
    description.style.opacity = 1;
    description.style.transform = 'translateY(0)';

    var links = document.querySelector('#links');
    links.style.opacity = 1;
    links.style.transform = 'translateY(0)';

    var projects = document.querySelector('#projects > div');
    projects.style.opacity   = 1;
    projects.style.transform = 'translateY(-50%)';

    var useful = document.querySelector('#useful > div');
    useful.style.opacity   = 1;
    useful.style.transform = 'translateY(-50%)';

    var useful = document.querySelector('#skills > div');
    useful.style.opacity   = 1;
    useful.style.transform = 'translateY(-50%)';

    var menuToggler = document.querySelector('header .menu-toggle');
    var menu = document.querySelector('header nav');

    menuToggler.addEventListener('click', function(e) {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggler.classList.remove('active');
        } else {
            menu.classList.add('active');
            menuToggler.classList.add('active');
        }
    });
})();
