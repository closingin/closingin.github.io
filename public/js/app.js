/*
** Written by closingin.
*/

function displayContent() {
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
}

function displayPersonalInformation() {
    var phone = '+33 6 78 82 38 95';
    var email = 'closingin@pm.me';

    var contact = document.querySelector('#contact .personal p');
    var sidebar = document.querySelector('aside #links .email');

    contact.innerHTML = contact.innerHTML.replace('__PHONE__', phone);
    contact.innerHTML = contact.innerHTML.replace('__EMAIL__', email);

    sidebar.setAttribute('href', 'mailto:' + email);
}

function handleNavigation() {
    function displayMenu(menu, toggler, elements) {
        menu.classList.add('active');
        toggler.classList.add('active');

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('faded');
        }
    }

    function hideMenu(menu, toggler, elements) {
        menu.classList.remove('active');
        toggler.classList.remove('active');

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('faded');
        }
    }

    var menu        = document.querySelector('header nav');
    var menuItems   = document.querySelectorAll('header nav a');
    var menuToggler = document.querySelector('header .menu-toggle');

    var aside = document.querySelector('aside');
    var main  = document.querySelector('main');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function(e) {
            e.preventDefault();

            hideMenu(menu, menuToggler, [aside, main]);

            document.querySelector(e.target.hash).scrollIntoView({
                behavior: 'smooth'
            });
        })
    }

    menuToggler.addEventListener('click', function(e) {
        if (menu.classList.contains('active')) {
            hideMenu(menu, menuToggler, [aside, main]);
        } else {
            displayMenu(menu, menuToggler, [aside, main]);
        }
    });
}

function handleSlideshow() {
    var prev = document.querySelector('#prev');
    var next = document.querySelector('#next');

    var container    = document.querySelector('#projects .projects-container');
    var firstProject = document.querySelector('#projects .projects-container .project:first-child');
    var lastProject  = document.querySelector('#projects .projects-container .project:last-child');

    var offset = firstProject.offsetWidth;

    if (lastProject.offsetLeft + offset >= lastProject.offsetParent.offsetWidth) {
        lastProject.offsetParent.classList.add('hidden-right');
    }

    prev.addEventListener('click', function(e) {
        offset = firstProject.offsetWidth + 40;

        if (firstProject.offsetLeft + offset == 0) {
            firstProject.offsetParent.classList.remove('hidden-left');
        }

        if (lastProject.offsetLeft + (offset * 2) - 40 >= lastProject.offsetParent.offsetWidth) {
            lastProject.offsetParent.classList.add('hidden-right');
        }

        container.style.marginLeft = ((parseInt(container.style.marginLeft) || 0) + offset) + 'px';
    });

    next.addEventListener('click', function(e) {
        offset = firstProject.offsetWidth + 40;

        if (firstProject.offsetLeft <= 0) {
            firstProject.offsetParent.classList.add('hidden-left');
        }

        if (lastProject.offsetLeft - 40 <= lastProject.offsetParent.offsetWidth) {
            lastProject.offsetParent.classList.remove('hidden-right');
        }

        container.style.marginLeft = ((parseInt(container.style.marginLeft) || 0) - offset) + 'px';
    });
}

(function() {
    displayContent();
    displayPersonalInformation();
    handleNavigation();
    handleSlideshow();
})();
