 $(function() {

    function runCounter($counter) {
        var target = parseInt($counter.attr("data-target")),
            count = 0,
            speed = 90;

        $counter.text(0);

        var counterInterval = setInterval(function() {
            count ++;
            if (count >= target) {
                clearInterval(counterInterval);
            }
             // 바 증가
             $counter.parent('.progress-bar').css("width", count + "%");
            // 숫자(퍼센트) 증가
            $counter.text(count);
        }, speed);
    }//  function runCounter($counter) end

    function checkScroll() {
        const scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height();
            elementTop = $(".counters").offset().top;

        $(".counter").each(function() {
            const $this = $(this);
            //console.log($this);

            if (scrollTop + windowHeight > elementTop + 250) {
                if (!$this.hasClass("active")) {
                    $this.addClass("active");
                    runCounter($this);
                }
            } else {
                $this.removeClass("active");
                $this.text(0);
            }
        });
         //console.log($(window).scrollTop());
    } // function checkScroll() end
    //$.throttle(시간, 함수)
    //시간은 ms 예) 100 -> 0.1초
    $(window).on("scroll", $.throttle ? $.throttle(100, checkScroll) : checkScroll);
    checkScroll();
});//$(document).ready() end