//디지털시계,clock.js
    function digitalClock() {
            // 변수 선언
            const date = new Date();
            const clockBox = document.getElementById('clock');
               
            let day; // 요일을 담을 변수
            let clock ;
            //날짜
            let yy = date.getFullYear();
            let mm = date.getMonth();
            let dd = date.getDay();

             //시간:AM/PM,
            let hour = date.getHours();//시
            let minute = date.getMinutes();//분
            let second = date.getSeconds();//초
            //처리
            // if (date.getDay() === 0) {
            //     day = '일';
            // } else if (date.getDay() === 1) {
            //     day = '월';
            // } else if (date.getDay() === 2) {
            //     day = '화';
            // } else if (date.getDay() === 3) {
            //     day = '수';
            // } else if (date.getDay() === 4) {
            //     day = '목';
            // } else if (date.getDay() === 5) {
            //     day = '금';
            // } else if (date.getDay() === 6) {
            //     day = '토';
            // }
            //switc~case 문으로 변경
            //요일은 숫자에서 문자열로 변경
            switch (date.getDay()) {
                case 0:
                     day = '일';
                    break;
                case 1:
                     day = '월';
                    break;
                case 2:
                     day = '화';
                    break;
                case 3:
                     day = '수';
                    break;
                case 4:
                     day = '목';
                    break;
                case 5:
                     day = '금';
                    break;
                default:
                     day = '토';
            }
           

            //삼항연산자 사용하기
            const ampm = hour >= 12 ? 'PM':'AM';
            //0시는 12시로 표시,12시간제로 바꾸기
            hour = hour % 12;
            //0~11시 까지는 나머지가 0~11
            //12~23시 까지는 나머지가 0~11
            hour = hour ? hour: 12;
            //두 자리 맞추기
            //시간
            // if (hour< 10 ) {
            //     '0'+ hour;
            // }else {
            //     hour=hour;
            // }
            // //분
            // if (minute< 10 ) {
            //     '0'+ minute;
            // }else {
            //     minute=minute;
            // }
            // //초
            // if (second< 10 ) {
            //     '0'+ second;
            // }else {
            //     second=second;
            // }

            //함수: 반복코드를 재사용 할때
            //선언적 함수 사용하기
            //함수명?twoDigits 매개변수?timePara
            // function twoDigits(timePara) {
            //     if (timePara < 10) {
            //         timePara = "0"+timePara;
            //     }else {
            //         timePara = timePara;
            //     }
            //     return timePara;//timePara를 호출한 문장에 값을 되돌려준다.
            // }
            //삼항연산자로 변경 (조건) ? 표현식1: 표현식2;
            function twoDigits(timePara){
              //  (timePara < 10)? timePara = "0"+timePara:timePara=timePara;
              // 단축해서
                timePara = (timePara < 10)? "0"+timePara:timePara;
                return timePara;

            }

            //함수 호출
            hour = twoDigits(hour);
            minute = twoDigits(minute);
            second = twoDigits(second);
            // 출력
            // clock =
            // date.getFullYear() + '년 '  +
            // (date.getMonth() + 1) + '월 ' +
            // date.getDate() + '일 ' +
            // '('+day+')' + ampm +
            // hour + ':' +
            // minute + ':' +
            // second;
            //문자열 연결 연산자
            // clock = yy + '년' + mm + '월'+ dd + '일' +day +ampm +hour+':'+minute+':'+second;
            //템플릿리터럴(ver.ES6):기호는 백틱(backtick`)
            //문자열과 표현식(변수등) 구별 : ${표현식}
            //불필요한 문자열(+,'," 등) 제거

            clock = `${yy}년 ${mm}월 ${dd}일 ${day} ${ampm} ${hour}:${minute}:${second}`;

            clockBox.innerHTML = clock;
        }
        //setInterval(함수,시간)
        // 자바스크립트는 시간을 밀리초 단위로 표현한다.
        setInterval(digitalClock, 1000);