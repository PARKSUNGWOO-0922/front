// to the top button
/*
1. 사용자가 마우스 휠을 내려서 스크롤한다.

2. 브라우저가 스크롤 움직임을 감지한다.

3. 현재 스크롤 위치가 900px보다 큰지 확인한다.

4. 900px를 초과하면 맨 위로 버튼을 보여준다.

5. 900px 이하로 올라오면 버튼을 숨긴다.
*/
$(window).scroll(()=>{
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 900 ) {
        $('.tothetop').addClass('active');
    } else {
        $('.tothetop').removeClass('active');
    }
});
/*
window : 현재 브라우저 창을 의미합니다.
scroll() : 스크롤이 움직일 때 실행할 동작을 등록합니다. 
scrollTop():위에서부터 얼마나 내려왔는지값을 가져옴
box-shadow 속성
    box-shadow:
    1px      그림자의 가로 위치 
    1px      그림자의 세로 위치 
    7px      그림자의 흐림 정도 
    0        그림자의 퍼지는 정도 
    rgba(0, 0, 0, .5);  그림자 색상 

바닐라 코드로 변경시
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 900) {
        document.querySelector('.tothetop').classList.add('active');
    } else {
        document.querySelector('.tothetop').classList.remove('active');
    }

});
*/