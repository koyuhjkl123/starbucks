const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    //Logic..
    searchInputEl.focus(); // 마우스 클릭할때

});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused'); // focused 클래스 추가
    searchInputEl.setAttribute('placeholder', '통합검색'); // html 속성을 지정할때
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused'); // focused 클래스 삭제
    searchInputEl.setAttribute('placeholder', ''); // html 속성을 지정할때
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021년 반환
