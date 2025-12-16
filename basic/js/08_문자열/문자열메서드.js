//  charAt()
/**
 * - 문자열(String)에서 지정한 위치(index)의 문자 1개를 반환하는 메서드입니다.
 * - 인덱스는 0부터 시작하며, 문자열 탐색이나 특정 위치의 문자 확인에 사용됩니다.
 */
// ## 📌 기본 문법
// str.charAt(index)

let str ="JavaScript";

console.log(str.charAt(0));// "J"
console.log(str.charAt(4));// "S"
console.log(str.charAt(20));// "" (빈 문자열)
console.log(str.charAt(-1));// "" (음수는 무시)

/**
 * length
 * - 문자열(String)에 포함된 문자 개수를 반환하는 속성(property) 입니다.
 * - 메서드가 아니라 **속성**이므로 괄호 `()`를 사용하지 않습니다.
 * ## 📌 기본 문법
    str.length
 */
// 

let text ="JavaScript";

console.log(text.length);// 10

let msg ="Hello World";

console.log(msg.length);// 11 (공백 포함)

"".length;// 0 개발자 콘솔에서 확인가능

/**
 * replace()
 * 문자열(String) 안에서 특정 문자나 패턴을 다른 문자로 바꾸는 메서드**입니다.
 * ## ✔ 기본 문법
 * 문자열.replace(찾을_내용, 바꿀_내용)
 */

text = "Hello World";
let result = text.replace("World", "JavaScript");

console.log(result); // Hello JavaScript

//replace()는 기본적으로 가장 처음 등장하는 값만 치환합니다.
let t = "apple apple apple";
console.log(t.replace("apple", "banana"));//결과: banana apple apple

// 전체 치환하려면 정규식(RegExp) 사용
// 문자열.repalce(/문자열/g,"문자열")
//g는 grobal
t = "apple apple apple";
console.log(t.replace(/apple/g, "banana"));
// banana banana banana



//0~9와 . 을  제외한 문자는 모두 공백('')처리
"3.6k".replace(/[^0-9.]/g, '') // "3.6"  개발자콘솔에서 확인가능
"1,234명".replace(/[^0-9.]/g, '') // "1234"

//`replace()`는 문자열에서만 작동합니다.
//따라서 숫자에서 replace()를 실행하려면 문자열로 변환해야 합니다.
String(12345).replace("234", "000");  // "10005" 개발자콘솔에서 확인가능
