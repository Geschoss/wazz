(function(doc) {
  "use strict";
  const $ = querySelector(doc);

  const menuBtn = $('.c-hamburger');
  const m_menu = $('.m-menu__container');
  const m_menuClassList = m_menu.classList;

  menuBtn.addEventListener( 'click', function(e) {
      e.preventDefault();
      const classList = this.classList;
      toggleClass(classList, 'is-active');
      toggleClass(m_menuClassList, 'opened');
  });

  function toggleClass(classList, className) {
      (classList.contains(className) === true) ? classList.remove(className) : classList.add(className);
  }

  function querySelector(root) {
      return function (selector) {
          return document.querySelector(selector);
      }
  }
})(document);
