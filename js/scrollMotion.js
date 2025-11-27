 
   
        $(window).scroll(function () {
            //변수 선언
            const windowHeight = $(window).height();
            let windowScrollTop = $(window).scrollTop();
            const speed = 1500, 
                  easing = "easeOutExpo", 
                  pos = 0; 

            $(".motion").each(function(i,el){
                //position():포지션이 지정된 가장 가까운 조상 요소를 기준으로 지정한다.
                const elementTop = $(el).position().top;
                //offset1: .motion의 움직이기 시작하는 시점:숫자가클수록 더 많이 스크롤해야 동작한다.
                //offset2: .motion의 시작 위치
                let offset1 ,offset2 ,speed;

                switch (i) {
                    case 0 : 
                        offset1 = 800;
                        offset2 = 300;  
                        speed = 2000;   
                        break;
                    case 1:
                    case 2:
                        offset1 = 800;
                        offset2 = 600;  
                        speed = 1000;  
                    break;
                    default:
                        offset1 = 1800;
                        offset2 = 600;  
                        speed = 400;   
                }


                if ( i < 1){
                    offset1 = 800;
                    offset2 = 300;  
                    speed = 2000;   

                } else if ( i < 3) {
                    offset1 = 800;
                    offset2 = 600;  
                    speed = 1000;   
                } else {
                    offset1 = 1800;
                    offset2 = 600;  
                    speed = 400;   

                }

                if (windowScrollTop > elementTop - windowHeight  +offset1) {
                $(el).stop().animate({ top: pos, opacity: 1 }, (speed * (i + 1)) / 2, easing);
                }
                else {
                    $(el).stop().animate({ top: pos + offset2, opacity: 0 }, speed, easing);
                }
            });

            if ( windowScrollTop > 0) {
                $("#header").addClass("active");
            } else {
          $("#header").removeClass("active");
        }
   });//$(window).scroll

   