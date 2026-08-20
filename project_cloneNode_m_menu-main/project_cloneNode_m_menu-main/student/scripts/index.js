//student index.js
//1. 데스크탑 내비 복제 -> 모바일 내비 위치에 붙여넣기
//변수생성 -> 복제 대상 정하고 복제 -> 붙여넣기 대상 정하고 붙여넣기
const d_menu = document.querySelector('.full_nav .menu')
const m_menu = document.querySelector('#m_nav')

console.log(d_menu, m_menu)

let cloneMenu = d_menu.cloneNode(true)
console.log(cloneMenu)
m_menu.appendChild(cloneMenu);

//2. 모바일 메뉴(햄버거) 클릭 시 모바일 배경 + 모바일 메뉴 출력하기
const m_nav_btn = document.querySelector('#m_nav_btn')
const m_nav_bg = document.querySelector('.mobile_ver .m_nav_bg')
let booleanMenu = 0;//안보이는 초기값(상태변수)설정

console.log(m_nav_btn, m_nav_bg)

m_nav_btn.addEventListener('click',()=>{
    booleanMenu = !booleanMenu;
    booleanMenu == 0 ? (()=>{
    //보인다(거짓) -> right:100%, opacity:0
    m_nav_bg.style.opacity = '0%';
    m_nav_bg.style.right = '1';
})() : (()=>{
    //보인다(거짓) -> right:-100%, opacity:0
        m_nav_bg.style.opacity = '-100%';
    m_nav_bg.style.right = '0';
})()
})


