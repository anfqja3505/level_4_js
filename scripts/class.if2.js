//class.if2.js
//css속성을 1~2개 일회성으로 사용 시
//객체.style.속성 = '값';
//객체.style.속성 = '값';
//객체.style.속성 = '값';
//css 2개 이상의 속성을 반복사용으로 사용 시
//css파일에서 별도의 클래스 준비 -> 준비하기
//객체.classList.함수('적용할클래스명')
//함수종류 : add, remove, toggle, replace (replace보다 앞 3개가 더 자주 사용됨)
const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id')
console.log(pTag, btn1, userIdInput);

btn1.addEventListener('click',()=>{
    // 아이디를 입력 안하고 버튼 클릭 시 -> 아이디 입력 오류 출력
    // 아이디 입력하고 버튼 클릭 시 -> 결과없음
    //조건식) 아이디를 입력했는가? 참/거짓
    console.log(userIdInput.value) //값 테스트
    console.log(Boolean(userIdInput.value)) //논리 테스트
    if(userIdInput.value == ''){
        pTag.classList.add('error')
        pTag.innerHTML = '<em>아이디</em>이 실패했습니다.'
    }else{/* (앞) 조건이 거짓일 때 실행 결과 */
        pTag.classList.remove('error')
        pTag.innerHTML = '<em>로그인</em>에 성공하였습니다.'
    }
    // if(Boolean(userIdInput.value)==true){
    //     pTag.classList.remove('error')
    //     pTag.innerHTML = '<em>로그인</em>에 성공하였습니다.'
    // }
    //pTag.classList.toggle('error')
    //pTag.innerHTML = '<em>로그인</em>이 실패했습니다.'
    //pTag.textContent = '<em>로그인</em>이 실패했습니다.'
})



