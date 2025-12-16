// --- 좋아요 클릭 이벤트 ---
// like.js

// $(selector).on(eventName, childSelector, handler)  // 이벤트 위임
// $(document).on('click', '.like', function () {
$('.like').on('click', function () {
    let $btn = $(this);
    // 하트와 좋아요 숫자
    let text = $btn.text();
    // 하트 142 -> 142.0
    // 하트 3.7k -> 3.7
    let current = parseFloat(text);
    // 142 -> 142
    // 3.7 * 1000 -> 3700 
    // text가 'k'를 가지고 있으면
    if (text.includes('k')) current *= 1000;

    // 버튼이 .active를 가지고 있으면
    if ($btn.hasClass('active')) {
        current -= 1;
        // 버튼에 .active를 추가하면 글자색이 기본값으로
        $btn.removeClass('active');
        // 아웃라인(regular) 하트 모양
        $btn.find('i').attr('class', 'fa-regular fa-heart');
    } else {
        // 버튼이 .active를 가지고 있지 않으면
        // 142 -> 143
        current += 1;
        // 버튼에 .active를 추가하면 글자색이 빨강으로
        $btn.addClass('active');
        // 채워진(solid) 하트 모양
        $btn.find('i').attr('class', 'fa-solid fa-heart');
    }

    // main.js에 formatCount(current)
    // 천 단위 이상의 숫자에 k 단위 붙이기
    $btn.contents().last()[0].textContent = formatCount(current);
});