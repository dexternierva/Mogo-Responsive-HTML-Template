(function () {
    'use strict';

    let nav = document.querySelector('.nav');
    let navToggle = document.querySelector('.nav-toggle');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('nav--open');
        this.classList.toggle('nav-toggle--open');
    });

}());