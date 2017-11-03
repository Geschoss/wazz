(function () {
    'use strict';
    const gamesList = findAll('.game__item');
    const mySiema = new Siema({ onChange: handleChangeSiema, loop: true });
    const menuBtn = $('.c-hamburger');
    const collapsedMenu = $('.header-collapsed');
    const menuItems = findAll('.menu-item');
    const knobs = findAll('.knob');
    const moreBtn = $('.vacancies__more-btn');
    const collapsedVacancies = $('.vacancies__content-collapsed');
    const navBar = $('.header');

    menuItems.forEach(item => item.addEventListener('click', handlerMenuItemSelected));
    gamesList.forEach(item => item.addEventListener('click', handlerGameItemSelected));
    gamesList.forEach(item => item.addEventListener('mouseover', handlerGameItemMouseover));
    gamesList.forEach(item => item.addEventListener('mouseleave', handlerGameItemMouseleave));

    menuBtn.addEventListener( 'click', function(e) {
        e.preventDefault();
        toggleClass(this, 'is-active');
        toggleClass(collapsedMenu, 'opened');
    });

    moreBtn.addEventListener('click', function(e) {
        toggleClass(this, 'is-active');
        toggleClass(collapsedVacancies, 'opened');
    });

    $('.slider__prev').addEventListener('click', () => mySiema.prev());
    $('.slider__next').addEventListener('click', () => mySiema.next());

    window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
            addClass(navBar, 'header-narrow');
        } else {
            removeClass(navBar, ['header-narrow']);
        }
    };

    // utils
    function handlerMenuItemSelected(e) {
        dropItemsClass(menuItems, ['active']);
        addClass(this, 'active');
        removeClass(collapsedMenu, ['opened']);
        removeClass(menuBtn, ['is-active']);
    }
    function handlerGameItemSelected(e) {
        dropItemsClass(gamesList, ['active']);
        addClass(this, 'active');
    }
    function handlerGameItemMouseover(e) {
        dropItemsClass(gamesList, ['active']);
        addClass(this, 'active');
    }
    function handlerGameItemMouseleave(e) {
        dropItemsClass(gamesList, ['active']);
    }
    function selectKnobById(items, id) {
        items.forEach(knob => removeClass(knob, ['active', 'nearby', 'away', 'far']));
        addClass(items[id], 'active');
        addClassToItem(items, ['nearby'], 1, id);
        addClassToItem(items, ['away'], 2, id);
        addClassToItem(items, ['far'], 3, id);
    }
    function addClassToItem(items, classList, value, id) {
        classList.forEach(className => {
            const nextId = id + value;
            const prevId = id - value;
            if(items[prevId]) {
                addClass(items[prevId], className);
            }
            if(items[nextId]) {
                addClass(items[nextId], className);
            }
        })
    }

    function handleChangeSiema() {
        selectKnobById(knobs, this.currentSlide);
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
        item.classList.remove(...className);
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
