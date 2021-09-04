const menu = document.getElementById('menu');
const menupage = document.querySelector('#menupage');
const links = document.querySelectorAll('.item__link');
const Ffruit = document.querySelector('#paginas');
const Fcolor = document.querySelector('#projetos');

const toggleClass = (elem, oldC, newC) => {
    elem.classList.toggle(newC);
    elem.classList.toggle(oldC);
};

links.forEach((button) => {
    button.addEventListener('click', function () {
        toggleClass(menupage, 'menu-on', 'menu-off');
    });
});

menu.addEventListener('click', () => {
    toggleClass(menupage, 'menu-on', 'menu-off');
});

filterObjects('all');

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName('item');
    if (c == 'all') c = '';
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

Ffruit.addEventListener('click', () => {
    filterObjects('paginas');
});

Fcolor.addEventListener('click', () => {
    filterObjects('projetos');
});
