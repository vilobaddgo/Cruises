let show = document.getElementById('showMenu');
let menu = document.querySelector('.header-menu-show');
let a = true;

show.onclick = function (e) {

    if (a) {
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none';
    }
    a = !a;
};

document.onclick = function (e) {
    let target = e.target;
    if (target.className !== 'header-menu-show' && target.className !== 'header-menu-show-link' && target.className !== 'watch') {
        menu.style.display = 'none';
    }
};


/* menu.onmouseleave = function () {
      menu.style.display = 'none';
  };*/





