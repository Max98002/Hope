document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.nav-block_mobile');

  let show = true;


  const showHide = () => {
    menu.style.display = show ? 'block' : 'none';
    show = !show;
  }

  menuBtn.addEventListener('click', () => showHide());

});