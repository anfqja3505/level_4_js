//login.js(student)
//목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목 클릭 시
//3. 기존회원 클릭 -> 기존회원 내용 보이기/비회원내용 숨기기
//4. 비회원 클릭 -> 기존회원 내용 숨기기/비회원내용 보이기

const loginTabTitle = document.querySelectorAll('#login-frm .title button')
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul')

console.log(loginTabTitle)
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
// loginTabTitle[1].addEventListener('click',()=>{
//     //0(숨기기), 1(보이기) == x
//     //0,1(숨기기), 1(보이기) == o
//     loginTabContent[0].classList.add('display-hide');
//     loginTabContent[1].classList.add('display-hide'); //모두 숨기기
//     loginTabContent[1].classList.remove('display-hide'); //클릭대상과 일치하는 대상만 보이기
// })

loginTabTitle[0].addEventListener('click',()=>{loginTabFunc(0)})
loginTabTitle[1].addEventListener('click',()=>{loginTabFunc(1)})

//반복 함수 별도 생성(함수 안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index) {
    loginTabContent[0].classList.add('display-hide');
    loginTabContent[1].classList.add('display-hide'); //모두 숨기기
    loginTabContent[index].classList.remove('display-hide'); //클릭대상과 일치하는 대상만 보이기

    loginTabTitle[0].classList.remove('active');
    loginTabTitle[1].classList.remove('active');
    return loginTabTitle[index].classList.add('active');
}

//목표2) 기존회원 - 아이디를 입력안하고 기존회원로그인 버튼 클릭 시 '아이디를 입력하세요' 경고장 출력
const memberLoginBtn = document.querySelector('#member-login');
const nonMemberLoginBtn = document.querySelector('#non-member-login');
const userIdInput = document.querySelector('#user-id');
const userPwInput = document.querySelector('#user-pw');
const nonUserName = document.querySelector('#non-user-id');
const nonUserPw = document.querySelector('#non-user-pw');
const nonUserOrder = document.querySelector('#non-user-order');

console.log(userIdInput, memberLoginBtn);

memberLoginBtn.addEventListener('click',()=>{
    loginErrorfunc(userIdInput, '아이디');
    loginErrorfunc(userPwInput, '비밀번호');
})
nonMemberLoginBtn.addEventListener('click',()=>{
    loginErrorfunc(nonUserName, '주문자명');
    loginErrorfunc(nonUserOrder, '주문번호');
    loginErrorfunc(nonUserPw, '비회원 주문 비밀번호');
})


function loginErrorfunc(dom, str) {
    if(dom.value == ''){alert(`${str}를(을) 입력하세요`);}
}


