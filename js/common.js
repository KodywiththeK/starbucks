const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search라는 클래스를 가진 div 클릭하면 input 태그 요소도 같이 focus
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

// 돋보기 클릭하면 focused 클래스 추가, input 요소에 '통합검색' 보임
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 돋보기 포커스 해제되면 focused 클래스 삭제, input 요소에 '통합검색' 삭제
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//copyright 년도 가져오기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();