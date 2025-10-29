//함수작성
//Js실행문장;
        function fn2() {
            alert('JavaScript');
        }
//버튼 선택
//자바스크립트는 명령어(단어)의 대소문자를 구별한다.(카멜표기법)
//클릭 이벤트 작성
//함수 호출
        var btn2 = document.getElementById('btn2');
        btn2.onclick = function(){
            fn2();      
        };