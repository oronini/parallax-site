function loadView() {
  window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const eye = document.querySelector('.eyeColor');
    console.log(eye);
    setTimeout(
      function ()  {
        eye.style.opacity = '1';
      },1200
    )
    setTimeout(
      function () {
        splash.animate(
          [
            {opacity: 1},
            {opacity: 0}
          ],
          {
            duration: 500,
            fill: "forwards"
          }
        );
      } ,
      2300
    );
    setTimeout(
      function () {
        document.querySelector('body').style.overflowY = 'visible';
        splash.style.display = 'none';
      }, 2500
    )
  })
}

loadView();

function actionImg(wrap, action, anime) {
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const contensWrap = document.getElementById(wrap);
    const scrollTop = contensWrap.getBoundingClientRect().top + scrollY;
    const scrollBottom = contensWrap.getBoundingClientRect().bottom + scrollY;
    const windowHeight = window.innerHeight;
    const elm = document.querySelectorAll(action);
    for (let i = 0; i < elm.length; i++){
      if (scrollY > scrollBottom - windowHeight - (scrollBottom - scrollTop) / 2) {
        elm[i].classList.add(anime);

      } 
    } 
  });
}

actionImg('js-top', '.js-bgText01', 'fadeUp03');
actionImg('js-contensWrap01', '.js-action01', 'fadeUp01');
actionImg('js-contensWrap01', '.js-bgText02', 'fadeUp03');
actionImg('js-contensWrap02', '.js-action02', 'fadeUp02');
actionImg('js-contensWrap02', '.js-bgText03', 'fadeUp03');

actionImg('js-contensWrap03', '.js-action03', 'fadeUp01');
actionImg('js-contensWrap03', '.js-bgText04', 'fadeUp03');

actionImg('js-contensWrap04', '.js-action04', 'fadeUp02');
actionImg('js-contensWrap04', '.js-bgText05', 'fadeUp03');
actionImg('js-bg6', '.js-bgText06', 'fadeUp03');


const toTopBtn = document.getElementById('js-toTop');

function fixedHeader() {
  const header = document.getElementById('js-header');
  const bg2 = document.getElementById('js-bg2');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const headerTop = header.getBoundingClientRect().top + scrollY;
    const bg2Top = bg2.getBoundingClientRect().top + scrollY;
    if (scrollY > headerTop) {
      header.classList.add('js-fixedHeader');
      toTopBtn.classList.add('show');
    } else if (scrollY < bg2Top) {
      header.classList.remove('js-fixedHeader');
      toTopBtn.classList.remove('show');
    }
  });
}

fixedHeader();

function toTOP() {
  toTopBtn.addEventListener('click', () => {
    const scrollTop =document.getElementById('js-top');
    scrollTop.scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  })
}

toTOP();