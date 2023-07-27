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