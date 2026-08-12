// index.js
//1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경변수
//------------------------------------연습(웹은행 150만원 예금)
let moneyPrice = 1500000;
const result2p = document.querySelector('.money');
let dataReplace = moneyPrice.toLocaleString('ko-kr');
let example = (moneyPrice)+100000

//출력 테스트 콘원
console.log(itemPrice, titleBig, result1p, replaceData);
console.log(moneyPrice, result2p, dataReplace, example);

//실행 결과

result1p.textContent = replaceData+'원';

result2p.textContent = dataReplace+'원이 입금되었습니다.';

//=====================================================
//2. 배열
const money = [24600, 32000, 19900]
const list1Li = document.querySelectorAll('.list1 > li');
const listDt = document.querySelectorAll('.study dt');
const listDd = document.querySelectorAll('.study dd');
const foodSchoolMenu = foodSchool; 

//=====================================================
//3. 객체
const movie = { //객체변수 == 줄여서 객체
    name:'스파이더맨', //속성:값, 구조로 작성
    price:12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price); //객체.속성 출력

list1Li[0].textContent = money[0];
list1Li[1].textContent = money[1];
list1Li[2].textContent = money[2];
list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0];

//연습용

listDt[0].textContent = itemName[1];
listDd[0].textContent = itemPriceOriginal[1]; 
listDt[1].textContent = itemName[2];
listDd[1].textContent = itemPriceOriginal[2]; 
foodSchool[1] = '스테이크';

console.log(list1Li[0], list1Li[1], list1Li[2]);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));
console.log(foodSchoolMenu, foodSchoolMenu[0], foodSchoolMenu[2], foodSchoolMenu[3], foodSchool[1]);

//==================================객체+cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre;

//=================================객체 연습
dessertTray.bottom[2] = '망고';

console.log(dessertTray);
console.log(dessertTray.top[3], dessertTray.middle[0], dessertTray.bottom[1], dessertTray.bottom[2]);

//증감연산자
let num = 1; //1
console.log(num); //1(변수가 처음 대입된 값 테스트)

num++; //1증가
console.log(num); //2

num--;
console.log(num); //1

//==================================증감연산자, 2개 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2);

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면 
//기존 변수값(number1)을 대입(=)을 만나 number2로 먼저 보내고
//++로 number1을 나중에 증가시킨다(후처리)
console.log(number1, number2);