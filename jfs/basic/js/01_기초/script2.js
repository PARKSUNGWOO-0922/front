//이벤트객체.이벤트함수("이벤트종류",함수);
//1.버튼 찾기
//2.이벤트 작성
//이벤트 작성 형식
//이벤트객체.on이벤트종류 = 함수;
    window.addEventListener("DOMContentLoaded",function(){
    var btn4 = document.getElementById('btn4');
    btn4.onclick = function(){
        alert('자바스크립트 세계에 오신것을 환영합니다.');
    };
});