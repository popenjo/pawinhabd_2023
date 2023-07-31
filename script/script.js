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