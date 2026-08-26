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
//기존회원 - 아이디, 비밀번호, 로그인 버튼 변수
const userIdInput = document.querySelector('#user-id');
const userPwInput = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');
const pwVisibleBtn = document.querySelector('#member-pw-visible')
//비회원 - 주문자명, 주문번호, 비회원 주문 비밀번호, 주문조회 버튼 변수
const nonMemberLoginBtn = document.querySelector('#non-member-login');
const nonUserName = document.querySelector('#non-user-id');
const nonUserPw = document.querySelector('#non-user-pw');
const nonUserOrder = document.querySelector('#non-user-order');
const nonPwVisibleBtn = document.querySelector('#non-member-pw-visible')


console.log(userIdInput, memberLoginBtn);

// memberLoginBtn.addEventListener('click',()=>{
//     loginErrorfunc(userIdInput, '아이디');
//     loginErrorfunc(userPwInput, '비밀번호');
// })
// nonMemberLoginBtn.addEventListener('click',()=>{
//     loginErrorfunc(nonUserName, '주문자명');
//     loginErrorfunc(nonUserOrder, '주문번호');
//     loginErrorfunc(nonUserPw, '비회원 주문 비밀번호');
// })


function loginErrorfunc(dom, str) {
    if(dom.value == ''){alert(`${str}를(을) 입력하세요`);}
}

//논리연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
memberLoginBtn.addEventListener('click',()=>{
    //목표1) 아이디, 비밀번호 중 하나라도 안적으면 'ooo를 입력하세요'
    //if(userIdInput.value == '' && userPwInput.value == ''){}
    if(userIdInput.value == '' || userPwInput.value == ''){
        if(userIdInput.value == '' && userPwInput.value == ''){
            alert('아이디와 비밀번호를 입력하세요.')
        }else if(userIdInput.value == ''){//하나의 조건세트에서 두번째 조건식이 필요할 때
            alert('아이디를 입력하세요')
        }else{// 조건세트 안에 거짓을 처리할때 (마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요')
        }
    }
    //목표2) 아이디, 비밀번호를 모두 적으면 'ooo님 환영합니다'
    // if(userIdInput.value != '' && userPwInput.value != ''){
    //     alert(`${userIdInput.value}님 환영합니다.`)
    // }
    //삼항조건 ? 참 : 거짓;
    //조건식 1개로 처리하는 if-else를 간편하게 쓰고 싶을때
    userIdInput.value != '' && userPwInput.value != '' ?
        alert(`${userIdInput.value}님 환영합니다.`) : undefined;//or null 
})

//비회원 이벤트 -함수
//목표1) 주문자명, 주문번호, 비회용 주문비번을 모두 썼을 때 "ooo님 주문은 배송중입니다."
nonMemberLoginBtn.addEventListener('click',()=>{
    // if(nonUserName.value != '' && nonUserPw.value != '' && nonUserOrder.value != ''){
    //     alert(`${nonUserName.value}님 주문은 배송중입니다.`)
    // }
    nonUserName.value != '' && nonUserPw.value != '' && nonUserOrder.value != '' ?
        alert(`${nonUserName.value}님 주문은 배송중입니다.`) : null;
    
    if(nonUserName.value == '' || nonUserPw.value == '' || nonUserOrder.value == ''){
        if(nonUserName.value == '' && nonUserPw.value == '' && nonUserOrder.value == ''){
            alert(`주문자명, 주문번호, 주문비밀번호를 입력해주세요.`)
        }else if(nonUserName.value == ''){
            alert(`주문자명을 입력해주세요.`)
        }else if(nonUserOrder.value == ''){
            alert(`주문번호를 입력해주세요.`)
        }else {
            alert(`주문비밀번호를 입력해주세요.`)
        }
    }
})

//기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; //비번 숨긴형태 초기값
pwVisibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ?
        userPwInput.type = 'text'
        : userPwInput.type = 'password'
    pwVisibleStatus = !pwVisibleStatus;
    return;
})

let nonPwVisibleStatus = 0;
nonPwVisibleBtn.addEventListener('click',()=>{
    nonPwVisibleStatus == 0 ?
        nonUserPw.type = 'text'
        : nonUserPw.type = 'password'
    nonPwVisibleStatus = !nonPwVisibleStatus;
    return;
})