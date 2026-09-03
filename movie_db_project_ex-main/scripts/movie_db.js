//영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입니다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의언덕
const movieDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '루소 형제',
        rating: 4.8,
        cast: ['로버트 다우니 주니어', '베네딕트 컴버배치', '톰 히들스턴', '톰 홀랜드'],
        overview: '전 세계를 위협하는 강력한 적에 맞서기 위해 마블의 슈퍼히어로들이 다시 한번 한자리에 모여 사상 최대의 결전을 벌인다.'
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2025-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '존 왓츠',
        rating: 4.7,
        cast: ['톰 홀랜드', '젠데이아', '제이콥 배덜런'],
        overview: '정체가 밝혀진 이후 혼란에 빠진 세상을 구하기 위해 고군분투하는 스파이더맨의 새로운 운명의 여정이 시작된다.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2015-10-08',
        poster: 'poster/poster_themartian.jpg',
        genre: ['SF', '드라마', '어드벤처'],
        director: '리들리 스콧',
        rating: 4.6,
        cast: ['맷 데이언', '제시카 차스테인', '위노나 라이더', '치웨텔 에지오포'],
        overview: '화성 탐사 도중 모래폭풍을 만나 홀로 남겨진 우주 비행사가 생존을 위해 사투를 벌이며 지구로 돌아갈 방법을 찾는 이야기.'
    },
    {
        id: 4,
        title: '토이스토리5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        genre: ['애니메이션', '코미디', '모험', '가족'],
        director: '앤드류 스탠튼',
        rating: 4.5,
        cast: ['톰 행크스', '팀 알렌', '조이 쿠삭'],
        overview: '장난감들의 세계에 새로운 디지털 기술과 장난감들이 등장하면서 벌어지는 우정과 모험의 유쾌한 판타지.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다 2',
        date: '2026-11-10',
        poster: 'poster/poster_devilwearsprada2.jpg',
        genre: ['코미디', '드라마'],
        director: '데이비드 프랭켈',
        rating: 4.3,
        cast: ['메릴 스트립', '앤 헤서웨이', '에밀리 블런트'],
        overview: '패션계의 여왕 미란다 프리슬리와 앤디가 다시 만나 급변하는 현대 패션계 속에서 펼치는 치열하고도 흥미진진한 일상.'
    },
    {
        id: 6,
        title: '마이클',
        date: '2025-04-18',
        poster: 'poster/poster_michael.jpg',
        genre: ['전기', '음악', '드라마'],
        director: '안톤 푸쿠아',
        rating: 4.6,
        cast: ['자파르 잭슨', '콜먼 도밍고', '니아 롱'],
        overview: '팝의 황제 마이클 잭슨의 찬란했던 음악 인생과 무대 뒤의 숨겨진 인간적인 이야기를 다룬 전기 영화.'
    },
    {
        id: 7,
        title: '슈퍼마리오 갤럭시',
        date: '2026-12-25',
        poster: 'poster/poster_supermariogalaxy.jpg',
        genre: ['애니메이션', '판타지', '어드벤처'],
        director: '아론 호바스',
        rating: 4.4,
        cast: ['크리스 프랫', '안야 테일러 조이', '찰리 데이'],
        overview: '버섯 왕국을 넘어 광활한 우주 은하계를 배경으로 펼쳐지는 마리오와 친구들의 스펙터클한 우주 모험.'
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        genre: ['SF', '드라마', '모험'],
        director: '필 로드, 크리스 밀러',
        rating: 4.9,
        cast: ['라이언 고슬링', '산드라 뮬러'],
        overview: '인류를 구하기 위해 홀로 기억을 잃은 채 우주선에서 깨어난 과학자가 미지의 존재와 협력하여 위기를 극복하는 SF 대작.'
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-09-15',
        poster: 'poster/poster_wutheringheights.jpg',
        genre: ['로맨스', '드라마', '고전'],
        director: '에머랄드 페넬',
        rating: 4.3,
        cast: ['마고 로비', '제이코 엘로디'],
        overview: '영국 요크셔의 황량한 들판을 배경으로 펼쳐지는 파괴적인 사랑과 복수의 엇갈린 운명을 그린 고전 명작 각색 영화.'
    }
];