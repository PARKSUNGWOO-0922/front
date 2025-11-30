$(document).ready(function () {

    $(".container").on("mouseenter", function () {

        // 이미지 어둡게 + 블러
        $(this).find(".img-main img").css({
            filter: "brightness(30%) blur(2px)",
            transition: "0.4s"
        });

        // 텍스트 표시
        $(this).find(".text-overlay").css({
            opacity: "1",
            transition: "0.4s"
        });

        // 관람평 박스 표시
        $(this).find(".review-point").css({
            opacity: "1",
            transition: "0.4s"
        });

    });

    $(".container").on("mouseleave", function () {

        // 이미지 원래 밝기
        $(this).find(".img-main img").css({
            filter: "brightness(100%) blur(0px)",
            transition: "0.4s"
        });

        // 텍스트 숨김
        $(this).find(".text-overlay").css({
            opacity: "0",
            transition: "0.4s"
        });

        // 관람평 숨김
        $(this).find(".review-point").css({
            opacity: "0",
            transition: "0.4s"
        });

    });

});
