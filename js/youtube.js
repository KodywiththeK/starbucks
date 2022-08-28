 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
  // 작성했던 player라는 id 값을 가진 요소를 찾음
  new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
      playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
     },
      events: {
        // 영상이 준비되면 event라는 매개변수를 받는 함수 실행
        onReady: function (event) { 
          // 이벤트라는 매개변수에는 target이라는 속성이 들어있고, 
          // target은 재생되고있는 영상 자체를 의미함. 
          // mute라는 매소드 실행하면 영상이 음소거됨.
          event.target.mute() 
        }
      }
     });
 }