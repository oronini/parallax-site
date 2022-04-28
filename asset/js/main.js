function loadView() {
  window.addEventListener('load', () => {
    const splash = document.getElementById('js-splash');
    const eye = document.querySelector('.js-eyeColor');

    const eyeColor = function()  {
      eye.style.opacity = '1';
    };
    const splashFadeOut = function () {
      splash.animate([
        {opacity: 1},
        {opacity: 0}
      ], {
        duration: 500,
        fill: "forwards"
      });
    };
    const mainContensShow = function () {
      document.querySelector('body').style.overflowY = 'visible';
      splash.style.display = 'none';
    };

    setTimeout(eyeColor, 1200);
    setTimeout(splashFadeOut, 2300);
    setTimeout(mainContensShow, 2500);
  });
};

function createBgText(){
  const spanTextArray = [
    [
      {text: 'w', class: '1 ', add: '1'},
      {text: 'e', class: '1 delay-time02', add: '1'},
      {text: 'l', class: '1 delay-time04', add: '1'},
      {text: 'l', class: '1 delay-time06', add: '1'},
      {text: 'c', class: '1 delay-time08', add: '1'},
      {text: 'o', class: '1 delay-time10', add: '1'},
      {text: 'm', class: '1 delay-time12', add: '1'},
      {text: 'e', class: '1 delay-time14', add: '1'},
      {text: '.', class: '1 delay-time18', add: '1'},
    ],
    [
      {text: 'G', class: '2 ', add: '2'},
      {text: 'a', class: '2 delay-time03', add: '2'},
      {text: 'l', class: '2 delay-time06', add: '2'},
      {text: 'l', class: '2 delay-time09', add: '2'},
      {text: 'e', class: '2 delay-time06', add: '2'},
      {text: 'r', class: '2 delay-time03', add: '2'},
      {text: 'y', class: '2 ', add: '2'},

    ],
    [
      {text: 'E', class: '3', add: '3'},
      {text: 'x', class: '3 delay-time09', add: '3'},
      {text: 'a', class: '3 ', add: '3'},
      {text: 'm', class: '3 delay-time09', add: '3'},
      {text: 'p', class: '3', add: '3'},
      {text: 'l', class: '3 delay-time09', add: '3'},
      {text: 'e', class: '3', add: '3'},
    ],
    [
      {text: 'E', class: '4 delay-time09', add: '4'},
      {text: 'x', class: '4 delay-time06', add: '4'},
      {text: 'a', class: '4 delay-time03', add: '4'},
      {text: 'm', class: '4', add: '4'},
      {text: 'p', class: '4 delay-time03', add: '4'},
      {text: 'l', class: '4 delay-time06', add: '4'},
      {text: 'e', class: '4 delay-time09', add: '4'},
    ],
    [
      {text: 'E', class: '5', add: '5'},
      {text: 'x', class: '5 delay-time06', add: '5'},
      {text: 'a', class: '5 delay-time09', add: '5'},
      {text: 'm', class: '5', add: '5'},
      {text: 'p', class: '5 delay-time06', add: '5'},
      {text: 'l', class: '5 delay-time09', add: '5'},
      {text: 'e', class: '5', add: '5'},
    ],
    [
      {text: 'G', class: '6 ', add: '6'},
      {text: 'o', class: '6 delay-time02', add: '6'},
      {text: 'o', class: '6 delay-time04', add: '6'},
      {text: 'd', class: '6 delay-time06', add: '6'},
      {text: ' ', class: '6', add: '6'},
      {text: 'b', class: '6 delay-time08', add: '6'},
      {text: 'y', class: '6 delay-time10', add: '6'},
      {text: 'e', class: '6 delay-time12', add: '6'},
      {text: '.', class: '6 delay-time14', add: '6'},
      {text: '.', class: '6 delay-time15', add: '6'},
      {text: '.', class: '6 delay-time16', add: '6'},
    ]
  ];

  spanTextArray.forEach(function(textCreate) {
    textCreate.forEach(function(val) {
      const createElm = document.createElement('span');
      const createText = document.createTextNode(val.text);
      createElm.appendChild(createText);
      createElm.setAttribute('class',`js-hidden js-bgText0${val.class}`);
      const te = document.querySelector(`.l-parallaxBg0${val.add}__text`);
      te.insertBefore(createElm, null);
    });
  });
};

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
      toTopBtn.classList.add('js-show');
    } else if (scrollY < bg2Top) {
      header.classList.remove('js-fixedHeader');
      toTopBtn.classList.remove('js-show');
    };
  });
};

function toTOP() {
  toTopBtn.addEventListener('click', () => {
    const scrollTop =document.getElementById('js-topBgImg');
    
    scrollTop.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });
  });
};

function actionElm(wrap, action, anime) {
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
      };
    } ;
  });
};

function init() {
  loadView();
  createBgText();
  actionElm('js-topBgImg', '.js-bgText01', 'js-fadeUp03');
  fixedHeader();
  toTOP();
  actionElm('js-contensWrap01', '.js-action01', 'js-fadeUp01');
  actionElm('js-contensWrap01', '.js-bgText02', 'js-fadeUp03');
  actionElm('js-contensWrap02', '.js-action02', 'js-fadeUp02');
  actionElm('js-contensWrap02', '.js-bgText03', 'js-fadeUp03');
  actionElm('js-contensWrap03', '.js-action03', 'js-fadeUp01');
  actionElm('js-contensWrap03', '.js-bgText04', 'js-fadeUp03');
  actionElm('js-contensWrap04', '.js-action04', 'js-fadeUp02');
  actionElm('js-contensWrap04', '.js-bgText05', 'js-fadeUp03');
  actionElm('js-bg6', '.js-bgText06', 'js-fadeUp03');
};
init();