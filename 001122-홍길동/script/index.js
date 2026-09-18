// 웹디자인개발기능사
// 자바스크립트 ver
// const popup = document.querySelector('#popup')
// const popup_close = document.querySelector('#popup button')
// const subMenu = document.querySelectorAll('nav > ul > li > ul')
// const nav = document.querySelectorAll('nav > ul > li')
// const subLi = document.querySelectorAll('nav > ul > li > ul > li')
// const notice = document.querySelector('.container .contents .notice li:nth-child(1)')


// popup.style.display = 'none';

// subMenu.forEach(m => { //서브 모두 숨기기(초기값)
//     m.style.height = '0';
//     m.style.overflow = 'hidden';
//     m.style.transition = 'height 0.4s'
// })

// subLi.forEach(sl => {
//     sl.addEventListener('mouseover', () => {sl.style.backgroundColor = 'pink';})
//     sl.addEventListener('mouseout', () => {sl.style.background = 'none';})
// })

// nav.forEach(n => {
//     n.addEventListener('mouseover',() => {
//         n.style.backgroundColor = 'yellow';
//         n.children[1].style.height = '170px'
//     })
//     n.addEventListener('mouseout', () => {
//         nav.forEach(t => {t.style.background = 'none'})
//                 subMenu.forEach(m => {
//             m.style.height = '0';
//         })
//     })
// })

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// notice.addEventListener('click',()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999'
// })
// popup_close.addEventListener('click',()=>{
//     popup.style.display = 'none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tabTitle = document.querySelectorAll('.notice_gallery .title a')
// const tabContent = document.querySelectorAll('.notice_gallery .contents > *')

// tabTitle.forEach((m, i) => {
//     m.addEventListener('click',()=>{
//         tabContent.forEach(c => {c.style.display = 'none';});
//         tabContent[i].style.display = 'flex';
//         tabTitle.forEach(c => {c.classList.remove('active')});
//         m.classList.add('active');
//     })
// })
// //히어로배너 상<->하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide = document.querySelectorAll('.hero_slide');
// // heroWrap.style.transform = 'translateY(-600px)';//모든 슬라이드 개수세기 용

// let count = 0; //초기값 0으로 시작해서 heroSlide의 개수 만큼 증가
// heroWrap.style.transition = 'transform 0.6s'

// const slideTimer = setInterval(()=>{
//     count++;
//     //if(count > 2){count = 0;}
//     if(count > heroSlide.length-1){count = 0}
//     console.log(count*300)
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// },3000)

// ======================================== 제이쿼리 ver
console.log(typeof $); //function 제이쿼리 로드 확인(필수 x)

// 자바스크립트에선 HTML 작업 시 변수 저장 작업 필수!
// 제이쿼리는 변수 구조가 워낙 짧아 2~3번 이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용 가능

$('#popup').hide();

$('nav > ul > li > ul');
const $sub = $('nav > ul > li > ul');
const $nav = $('nav > ul > li');
$sub.hide(); //제이쿼리는 대상이 2개 이상이어도 for 없이 한번에 다수 처리가 가능하다.

//자바스크립트에서 css 사용법 : 객체.style.속성 = '값'
//제이쿼리 css 사용법 : 객체.css('속성','값');
// $sub.css('height','0') //css() 함수 2개 이상 연결 = 체이닝
    // .css('overflow','hidden')
    // .css('transition','height 0.4s');

$sub.slideUp();

//제이쿼리 사용 시화살표 함수 사용 권장안함, 일반함수 위주로 사용
$nav.on('mouseover',function(){
    //$(this) 현재 마우스 오버 한 대상
    $(this).css('background-color','aqua');
    $(this).children('ul').stop().slideDown();
})
$nav.on('mouseout',function(){
    //$(this) 현재 마우스 오버 한 대상
    $(this).css('background-color','');
    $(this).children('ul').stop().slideUp();
})

const $noticeLi1 = $('.notice li:nth-child(1)')

$noticeLi1.on('click',function(){
    $('#popup').show();
})
$('#popup .close').on('click',function(){
    $('#popup').hide();
})

//탭 제목 활성화
$('.notice_gallery .title a').on('click',function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); //현재 클릭한 대상 인덱스 변수저장

    $('.notice_gallery .contents > *').hide(); //모든 내용 숨기기
    $('.notice_gallery .contents > *').eq($i).css('display','flex');
    //eq => 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

//제이쿼리v 슬라이드
let count = 0; //초기값 0으로 시작해서 heroSlide의 개수 만큼 증가


const slideTimer = setInterval(function(){
    count++;
    if(count > 2){count = 0;}
    $('.hero_wrapper').css('transform',`translateY(-${count*300}px)`);
    // $('hero_wrapper').css('transform','-'+(count*300)+'px')
    // 기존 js에서 주로 다루는 transition + transform 애니메이션 묶음 전용 제이쿼리 함수
//     $('.hero_wrapper').animate({
//         top: '-'+(count*300)+'px',
//     },400)
},3000)