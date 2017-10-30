(function () {
    'use strict';

    const mySiema = new Siema();
    const menuBtn = $('.c-hamburger');
    const collapsedMenu = $('.header-collapsed');
    const menuItems = findAll('.menu-item');
    const moreBtn = $('.vacancies__more-btn');
    const collapsedVacancies = $('.vacancies__content-collapsed');

    menuItems.forEach(item => item.addEventListener('click', handlerItemSelected));

    menuBtn.addEventListener( 'click', function(e) {
        e.preventDefault();
        toggleClass(this, 'is-active');
        toggleClass(collapsedMenu, 'opened');
    });

    moreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleClass(this, 'is-active');
        toggleClass(collapsedVacancies, 'opened');
    });

    $('.slider__prev').addEventListener('click', () => mySiema.prev());
    $('.slider__next').addEventListener('click', () => mySiema.next());

    // utils
    function handlerItemSelected(e) {
        dropItemsClass(menuItems, 'active');
        addClass(this, 'active');
        removeClass(collapsedMenu, 'opened');
        removeClass(menuBtn, 'is-active');
    }

    function dropItemsClass(items, className) {
        items.forEach(node => removeClass(node, className));
    }

    function toggleClass(node, className) {
        (node.classList.contains(className) === true)
            ? node.classList.remove(className)
            : node.classList.add(className);
    }

    function removeClass(item, className) {
        item.classList.remove(className);
    }

    function addClass(item, className) {
        item.classList.add(className);
    }

    function $(selector) {
        return document.querySelector(selector);
    }

    function findAll(selector) {
        return document.querySelectorAll(selector);
    }
})();
