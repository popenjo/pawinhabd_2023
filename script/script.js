// 1. 모바일 메뉴 숨기기
// 객체 = 모바일 메뉴 m_nav_menu
// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
// 객체 = 햄 m_nav, 모 m_nav_menu
// 속성 = display:block;
// 이벤트 = hover
// 메소드
// 3. x 버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = close m_nav_menu
const m_menu = document.querySelector('.m_nav_menu')
const m_nav = document.querySelector('.m_nav')
const close = document.querySelector('#close')
console.log(m_menu, m_nav, close)
// 1. 모바일 메뉴 숨기기
m_menu.style.display = 'none';
// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
// 객체.이벤트 햄버거 메뉴 클릭시
m_nav.addEventListener('click',function(){
    m_menu.style.display = 'block';
})
// 3. x 버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    m_menu.style.display = 'none';
})

// main-swiper-slide
// const 변수 이름 = new Swiper('적용대상');
// const 변수 이름 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:10000,
        disableOnInteraction:false //버튼 클릭 후 자동 재생유지
    }, 
    loop:true,
    direction:'horizontal',
    // effect:'fade',
    navigation: {
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
    // direction:'vertical'
})
const swiper_all = new Swiper('#swiper_all',{
    autoplay:{
        delay:10000
    },
    loop:true,
    navigation: { //dlwjs, 이전, 다음 내비게이션 연결
        //next,prev 객체 연결 시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#swiper_all .swiper-button-next',
        prevEl: '#swiper_all .swiper-button-prev',
    },
})
// pawin-slide 2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
})
//입양정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto',//breakpoints 옵션추가시 'auto' //한번에 보이는 슬라이드 개수
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{deley:1000},
    loop:true,
    // swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        //해상도 순서는 작은 해상도 -> 큰 해상도 순으로 작성.
        700:{slidesPerview:2},
        900:{slidesPerView:3},
        1160:{slidesPerView:4}//1160이상일 경우 슬라이드 4개 표시 (해상도는 페이지 제작마다 바뀔 수 있슴)
    },
})