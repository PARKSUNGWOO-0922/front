// header 2depth background
// :not(:nth-of-type(5)
// -> 스토어 메뉴는 하위 메뉴가 없으므로 제외
$(".main > li:not(:nth-of-type(5)").mouseenter(e => {
    $(e.currentTarget).find(".sub").addClass("active");
    $("#header").addClass("active");
});

$(".main > li").mouseleave(() => {
    $("#header").removeClass("active");
    $('.sub').removeClass("active");
});

/* 메뉴에서 하위 메뉴 쪽으로 마우스를 이동할 때 파란색 배경이 유지되도록 하려는 의도*/ 
$("#header .subbar").mouseenter(() => {
    $("#header").addClass("active");
});
$("#header .subbar").mouseleave(() => {
    $("#header").removeClass("active");
});


// footer - looking for theater
/* .theater에 active추가해서 나타나게하고,*/ 
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});
/*
 >>순수바닐라JS로 변경시<<
 
 document.querySelector(".btn_looking_theater").addEventListener("click", () => {
    document.querySelector(".theater").classList.add("active");
});

document.querySelector(".closed").addEventListener("click", () => {
    document.querySelector(".theater").classList.remove("active");
});
*/