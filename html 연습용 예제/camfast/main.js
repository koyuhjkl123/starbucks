// let myName = "HEROPY";
// let email = 'koyuhjkl123@naver.com';
// let hello = `hello ${myName}?!`;

// console.log(myName);
// console.log(email);
// console.log(hello);

// let user = {
//     name: 'HEROPY',
//     age: 85
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);

// let boxEl = document.querySelector('.box')

// boxEl.addEventListener('click', function() {
//     console.log('click!!');
//     boxEl.classList.add('active');
//     console.log(boxEl.classList.contains('active')
//     );
//     boxEl.classList.remove('active');
//     console.log(
//         boxEl.classList.contains('active')
//     );
// });

// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index+1}`);

// });

// const boxEl = document.querySelector('.box');

// console.log(boxEl.textContent);

// boxEl.textContent = "heropy";
// console.log(boxEl.textContent);

// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환

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

const badgeEl = document.querySelector('header .badges');


// window.addEventListener('scroll', function() { // window : 프로젝트 화면 자체
//     console.log('scroll!'); // addevent를 스크롤이벤트를 추가해서 화면이 스크롤 되면 funcsuon실행
// }); // lodash cdn < 자바스크립트 라이브러리

window.addEventListener('scroll',_.throttle(function() { // throttle 오류 방지용 기능 /0.3초를 부화를 줌
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display : 'none'
        })
        // gsap.to(요소, 지속시간, 옵션);
    }else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display : 'block'
        })
    }
}, 300)); // 300 = 0.3초 1,000 = 1초 _.throttle(함수, 시간)

// gsap cdn 애니메이션 라이브러리


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEls, index) { // fadeEls 갯수만큼 인수로 적은 함수로 실행됨
    //fade , index 매개변수
    gsap.to(fadeEls, 1, {
        delay: (index + 1) * .7, // 0.7 , 1.4, 2.1, 2.7 뒤 4개 순차적 지연시간
        opacity: 1
    });
});

// 공지사항 Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', //수직 옵션
    autoplay: true, // 자동재생 여부
    loop:true // 반복재생 여부
});

new Swiper('.promotion .swiper-container', {
     // direction: 'horizontal', // 수평 슬라이드
        slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
        spaceBetween: 10, // 슬라이드 사이 여백
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기 
        loop:true,
        autoplay: {
            delay: 5000 //0.5초 자동 슬라이드
        },
        pagination: {
            el: '.promotion .swiper-pagination', // 페이지번호 요소 선택자
            clickable: true // 사용자의 페이지 번호 요소 제어
        },
       navigation: {
           prevEl: '.promotion .swiper-prev',
           nextEl: '.promotion .swiper-next'
       }
});

