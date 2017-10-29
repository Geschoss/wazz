(function () {
    'use strict';

    const menuBtn = $('.c-hamburger');
    const collapsedMenu = $('.site-header-collapsed');
    const menuItems = findAll('.menu__item');


    menuItems.forEach(item => item.addEventListener('click', closeMenu));

    menuBtn.addEventListener( 'click', function(e) {
        e.preventDefault();
        toggleClass(this, 'is-active');
        toggleClass(collapsedMenu, 'opened');
    });

    // utils
    function closeMenu(e) {
        e.preventDefault();
        dropItemsClass(menuItems, 'active');
        addClass(this, 'active');
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
