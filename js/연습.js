// 1. 원본 숫자 주머니(배열)
const numbers = [1, 2, 3, 4, 5];

// 2. .map()을 사용해서 숫자를 하나씩 끄집어낸 뒤 곱하기 2를 해줍니다!
const result = numbers.map((num) => num * 2).join(" ");

// 3. 결과 확인하기
console.log("원본 배열:", numbers);
console.log(".map() 적용 결과:", result);