(function(doc) {
  "use strict";
  const $ = querySelector(doc);
  const findAll = querySelectorAll(doc);

  const menuBtn = $('.c-hamburger');
  const m_menu = $('.m-menu__container');
  const menu_items = findAll('.menu__item');
  const m_menuClassList = m_menu.classList;

  menuBtn.addEventListener( 'click', function(e) {
      e.preventDefault();
      const classList = this.classList;
      toggleClass(classList, 'is-active');
      toggleClass(m_menuClassList, 'opened');
  });
  menu_items.forEach(item => {
      item.addEventListener('click', closeMenu)
  })


  function closeMenu(e) {
      menuBtn.classList.remove('is-active');
      m_menuClassList.remove('opened');
  }

  function toggleClass(classList, className) {
      (classList.contains(className) === true) ? classList.remove(className) : classList.add(className);
  }

  function querySelector(root) {
      return function (selector) {
          return document.querySelector(selector);
      }
  }
  function querySelectorAll(root) {
      return function (selector) {
          return document.querySelectorAll(selector);
      }
  }
})(document);
