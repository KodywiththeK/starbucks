const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// _.throttle(사용하려는 함수, 그 함수가 몇 초에 한번씩 실행되면 되는지 ms(밀리세컨드)단위의 시간을 추가))
window.addEventListener('scroll', _.throttle (
  function() {
    console.log(window.scrollY);
    //화면이 스크롤 될 때, 윈도우의 객체인 scrollY가 갱신되며, 
    // 이 값을 통해 지금 화면의 위치가 위에서부터 몇px 지점인지 알 수 있다)
    if (window.scrollY > 500) {
      //윈도우 scrollY 값이 500보다 커지면
      // gsap.to(요소, 지속시간(초)), 옵션);  
      //배지 숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none'
      } );
      //버튼 보이기
      gsap.to('#to-top', 0.2, {
        x: 0
      }); 
    } else {
      //아니면 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block'
      } ),
      //버튼 숨기기
      gsap.to('#to-top', 0.2, {
        x: 100
      });
    }
  }, 300
));

// 위에서 찾은 변수 toTopEl을 통해 클릭했을때, 0.7초동안 화면을 0px 위치로 스크롤 해주는 함수
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});

// 메인 배너에 사진 1초에 하나씩 나타나게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * 1,
      opacity: 1,    
    });    
});

//공지사항 스와이퍼
// new swiper(선택자, {옵션)};
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
//프로모션 슬라이드 스와이퍼
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', //기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 밀리세컨드 단위
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부 설정
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
//하단 어워즈 슬라이드
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


//토글프로모션 버튼 클릭하면 화면 접고 펴고
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //반대되는 값을 재할당하는 것
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide'); //promotionEl에 hide 라는 클래스 추가
    promotionToggleBtn.classList.add('upload');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
    promotionToggleBtn.classList.remove('upload');
  }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 유튜브 영상 위에서 움직이는 애니메이션
function floatingObject(selector, delay, size) {
  //애니메이션 라이브러리 gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true, // 한번 재생된 애니메이션을 거꾸로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// 
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // --> 보여짐 여부를 감시할 요소를 지정
      // 감시하려는 색션에 scroll-spy라는 클래스들을 하나씩 붙일거고, 
      // 클래스가 붙어있는 각각의 섹션들은 spyEls라는 변수에 모두 할당될거고, 
      // 그 섹션들을 반복적으로 처리하는데, 반복될떄마다 spyEl라는 매개변수에 그 값이 들어있을 것이고, 
      // spyEls는 내가 감시하는 하나의 섹션이 되는 것.
      // scrollMagic이라는 라이브러리를 통해 감시하는 요소가 triggerElement에 지정이 된 것.
      // trigger라는 단어는 무엇인가를 강제로 읽힐 때 사용하는 단어.
      triggerHook: 0.8
      // 뷰포트가 어디에서 시작해서 어디에서 끝나는지 판단할 수 있겠고,
      // 시작하는 부분이 0, 끝나는 부분이 1
      // 내가 감시하고있는 요소가 뷰포트의 0.8지점에서 감시되었다는 것을 판단할 것이다 를 지정해주는 옵션
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
    //씬 이라는 것은 스크롤매직 자바스크립트 라이브러리를 통해 특정한 요소를 감시하는 옵션 지정하는 매소드
    //매소드체이닝을 통한 setClassToggle
    // --> html의 class 속성을 넣었다 뺐다 제어해주는 역할
    //addTo : 스크롤매직이라는 자바스크립트 라이브러리가 필요한 컨트롤러라는 개념의 내용을 추가하기 위해 매소드 사용

  }
)
