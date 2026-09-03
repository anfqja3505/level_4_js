//index.js
//기존 태그 선택 querySelcetor()
//기존 태그 복제 cloneNode()
//새로운 태그 생성 createElement()
//생성한 대상을 붙여넣기 appendChild()
const movieWrap1 = document.querySelector('.movie_wrap1');
const animeWrap = document.querySelector('.anime_wrap')


//Q.어벤져스 DB 1개 li에 삽입하기
//const movieLi = document.createElement('li')//li 생성
//movieLi.textContent = '어벤져스'
//movieLi.textContent = movieDB[0].title; // = 대입자(기존값을 제거하고 대입)
//movieLi.textContent += movieDB[0].date; // += 복합대입자(기존값에 더해서 대입)
//movieWrap1.appendChild(movieLi)//li 붙여넣기

//Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<9; i++){
    console.log(i)
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${movieDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${movieDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${movieDB[i].poster}" alt="${movieDB[i].title}"></a>`
    movieWrap1.appendChild(movieLi);
}

for(let i=0; i<9; i++){
    const animeLi = document.createElement('li')
    animeLi.innerHTML = `<h3>${animeDB[i].title}</h3>`
    animeLi.innerHTML += `<p>${animeDB[i].date}</p>`
    animeLi.innerHTML += `<p>${animeDB[i].genre}</p>`
    animeLi.innerHTML += `<a href="#"><img src="${animeDB[i].poster}" alt="${animeDB[i].title}"></a>`
    animeWrap.appendChild(animeLi);
}