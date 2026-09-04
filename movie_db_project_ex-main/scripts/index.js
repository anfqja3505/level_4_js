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

//-----------------------------------------------------------------------26/9/4
//무비차트 + swiper
// swiper-slide 생성해서 swiper-wrapper 붙여넣기
// swiper 플러그인 함수 연결은 swiper 최종연결
const chart_swiper = document.querySelector('.chart_swiper')

const chart_swiper_func = new Swiper(chart_swiper,{
    slidesPerView:2,
    spaceBetween:10,

})//플러그인 연결

for(i=0; i<5; i++){
    const chart_slide = document.createElement('div');
    chart_slide.classList.add('swiper-slide')

    chart_slide.innerHTML = `<p class="num">${movieDB[i].id}</p>`
    chart_slide.innerHTML += `<h3>${movieDB[i].title}</h3>`
    chart_slide.innerHTML += `<p class="rating">${movieDB[i].rating}</p>`
    chart_slide.innerHTML += `<p class="story">${movieDB[i].overview}</p>`
    chart_slide.style.backgroundImage = `url(${movieDB[i].poster})`

    chart_swiper.children[0].appendChild(chart_slide);//붙여넣기
}


const anime_swiper = document.querySelector('.anime_swiper');
const anime_swiper_func = new Swiper(anime_swiper,{
    slidesPerView:2,
    spaceBetween:10,
})

for(i=0; i<9; i++){
    const anime_slide = document.createElement('div');
    anime_slide.classList.add('swiper-slide');

    anime_slide.innerHTML = `<h3>${animeDB[i].title}</h3>`;
    anime_slide.innerHTML += `<p class="genre">${animeDB[i].genre}</p>`;
    anime_slide.style.backgroundImage += `url(${animeDB[i].poster})`

    anime_swiper.children[0].appendChild(anime_slide)
}