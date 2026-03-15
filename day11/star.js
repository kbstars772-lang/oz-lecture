
// const: 변하지 않는 값을 저장할 때 사용
const maxStars = 10; // 최대 별 개수는 10으로 고정

// 함수 선언문: 별을 출력하는 함수
// count가 0 이하일 경우 기본값 1을 사용
function printStars(count = 1) {
    var stars = ""; // var: 함수 안에서 사용할 변수 (별 문자열 저장)
    // for 반복문: count만큼 "*"을 stars에 추가
    for (let i = 0; i < count; i++) {
        stars = stars + "*"; // stars에 "*" 하나씩 더하기
    }
    console.log(stars); // 완성된 stars 문자열 출력
}

// 사용자 입력 처리
let input; // let: 값이 바뀔 수 있는 변수 (사용자 입력 저장)
let isNotValid = true; // 입력이 올바른지 아닌지 확인하는 플래그 변수

// do...while 반복문: 최소 1번은 실행하고, 조건이 true면 계속 반복
do {
    input = prompt("Enter the number of stars (1-10):"); // 사용자 입력 받기
    input = Number(input); // 문자열을 숫자로 변환

    // 조건문: 입력값이 숫자가 아니거나 범위를 벗어나면 잘못된 입력
    if (isNaN(input) || input < 1 || input > maxStars) {
        console.log(`[입력: ${input}] Invalid input! Enter a number between 1 and 10.`);
        isNotValid = true;   // 잘못된 입력 → 다시 반복
        continue;            // 다음 반복으로 넘어가기
    } else {
        console.log(`[입력: ${input}]`); // 입력값 출력
        printStars(input);   // 별 출력 함수 실행
        isNotValid = false;  // 올바른 입력 → 반복 종료 조건
        break;               // 반복문 강제 종료
    }
} while (isNotValid); // isNotValid가 true면 반복 계속

// ----------------------
// 도전 과제
// ----------------------

// 1. 함수 표현식: 역순 별 출력
const printReverseStars = function(count) {
    // count부터 1까지 감소하면서 별 출력
    for (let i = count; i > 0; i--) {
        var stars = "";
        for (let j = 0; j < i; j++) {
            stars = stars + "*"; // i개 만큼 별 생성
        }
        console.log(stars);
    }
};

// 2. 화살표 함수: 사각형 패턴 출력
const printSquare = (count) => {
    // count번 줄 출력
    for (let i = 0; i < count; i++) {
        var stars = "";
        // 각 줄마다 count개의 별 생성
        for (let j = 0; j < count; j++) {
            stars = stars + "*";
        }
        console.log(stars);
    }
};

// 3. for...in 사용: 객체 속성 순회
const patterns = {
    pattern1: "*",
    pattern2: "**",
    pattern3: "***"
};
// 객체의 key를 하나씩 꺼내서 값 출력
for (let key in patterns) {
    console.log(`${key}: ${patterns[key]}`);
}

// 4. ...rest 사용: 여러 숫자에 대해 별 출력
function printMultipleStars(...counts) {
    // counts 배열에 들어있는 숫자들을 하나씩 꺼내서 처리
    for (let count of counts) {
        var stars = "";
        for (let i = 0; i < count; i++) {
            stars = stars + "*"; // count만큼 별 생성
        }
        console.log(`Stars for count ${count}: ${stars}`);
    }
}

// ----------------------
// 실행 예시 (도전 과제 테스트)
// ----------------------
console.log("\n[역순 별 출력]");
printReverseStars(3); // 3 → "***", "**", "*"

console.log("\n[사각형 패턴 출력]");
printSquare(3); // 3 → "***/***/***"

console.log("\n[여러 숫자 출력]");
printMultipleStars(2, 3, 5); // 각각 별 출력
