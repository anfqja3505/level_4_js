//dom.js

//복습) 함수, 매개변수, 리턴
//더하기, 빼기 계산기
function calcFunc(n1, n2, oper='+') {
    let num1 = n1;
    let num2 = n2;
    return oper == '+'? num1+num2 : num1-num2;
    //조건 ? 참 : 거짓;
    let total = num1 + num2;
    return total;
}
console.log(calcFunc(3, 5, '-'));

//할인율 계산기(사용자가 입력하는 가격은 다르고, 할인은 고정)
//계산기) (100 - 5(할인율)) /100 = 0.95
//판매가 * 0.95 = 할인판매가
// * 0.95 = 5% 할인
// * 0.9 = 10% 할인
// * 0.8 = 20% 할인
// * 0.5 = 50% 할인
function discountFunc(saleRate, productPrice) {
    let saleDiscount = ( 100 - saleRate ) / 100;
    let totalPrice = productPrice * saleDiscount;
    return `${productPrice}원 기준 ${saleRate}% 할인가 : ${totalPrice}원`;
}
console.log(discountFunc(5, 50000))
console.log(discountFunc(10, 50000))
console.log(discountFunc(20, 50000))
console.log(discountFunc(30, 50000))
console.log(discountFunc(40, 50000))
console.log(discountFunc(50, 50000))

//1. 익명 함수
const btn1 = document.querySelector('#btn1');
//버튼 클릭 시 버튼 색상 변경(일회성)
/* btn1.addEventListener('click',function(){
    btn1.style.background = `red`;
}) */
btn1.addEventListener('click',()=>{
    btn1.style.background = `red`;
})

//일반 반복 함수(생성된 위치 위/아래 어디든 호출 가능)
func1(); // ok
function func1() {
    return console.log('일반 함수 테스트')
}
func1(); // ok

//이벤트 밖에서 사용하는 익명함수의 또다른 에
//변수 안에서 익명함수 생성
//func2(); // error
const func2 = function() {
    return console.log('익명 함수 테스트')
}
func2(); // ok

const func3 = ()=>{
    return console.log('익명 함수 테스트-화살표버전')
}
func3(); // ok

//2. 콜백함수(함수 안 또다른 함수 호출명
function orderCoffee(callback) {//callback -> 작명
    return console.log('SNS 이벤트 무료커피 나왔습니다.');
}
function sns() {
    return console.log('SNS 후기 업로드 완료');
}
orderCoffee(sns);

//3. data-* 속성
const cart_buy_div = document.querySelector('.cart_buy');
//HTML data-* 속성은 자바스크립트에서 dataset.* 읽을 수 있음.
let dataResult = cart_buy_div.dataset.name;
console.log(`dataresult 값은 ${dataResult}`)

//수량 증감 data-* 속성 활용
const countNumSpan = document.querySelector('.count_num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus')
console.log(countNumSpan.dataset.count);

//위 span 변수에 초기값 1 대입
countNumSpan.textContent = countNumSpan.dataset.count;
// + 클릭하면 span 값이 1씩 증가(익명함수)
plusBtn.addEventListener('click',()=>{
    //console.log(typeof(countNumSpan.dataset.count));//문자로 인식, 계산 불가
    let currentNum = Number(countNumSpan.dataset.count);//문자를 숫자로 변환해서 저장
    //console.log(currentNum, typeof(currentNum))//숫자로 변경된 점 확인
    let plusTotal = ++currentNum;//숫자로 변환한 변수를 1증가해서 담은 증가변수
    currentNum < 11 ? (()=>{
        countNumSpan.dataset.count = plusTotal;//증가된 변수를 해당 data속성에 업데이트
        countNumSpan.textContent = plusTotal;//증가된 변수를 사용자가 보는 화면에 출력
    })() : alert('최대 주문 수량입니다.')
})
minusBtn.addEventListener('click',()=>{
    let currentNum = Number(countNumSpan.dataset.count);
    //삼항 조건 연산자 활용(수량이 1 이상일때만 감소)
    currentNum > 1 ? (()=>{
        let totalNum = --currentNum;
        console.log(countNumSpan.dataset.count)
        countNumSpan.dataset.count = totalNum;
        countNumSpan.textContent = totalNum;
    })() : alert('최소 주문 수량입니다.')
})

//변수 목적 정리
//countNumSpan : 수량 표시되는 span 태그 변수
//plusBtn : + 버튼 변수
//currentNum : countNumSpan의 data속성을 숫자로 변환한 변수
