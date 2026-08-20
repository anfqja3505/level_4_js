// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == big1
//small2 == big2
//1.---------------------------변수
const bigThum = document.querySelector('.big_thum img')
const smallThum = document.querySelectorAll('.small_thum img')

console.log(bigThum, smallThum)
//2.---------------------------함수
//3.---------------------------이벤트
smallThum[0].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src;
})
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[1].src;
})