// 변수 선언 (var, let, const 각각 사용)
const maxScore = 100;   // 최대 점수 (const: 변하지 않는 값)
let input = prompt("점수를 입력하세요 (0~100):"); // 사용자 입력 (let: 값 변경 가능)
var grade;              // 등급 (var: 범위 제한이 약한 변수)

// 입력값을 숫자로 변환
let score = Number(input);

// ✅ 이항 산술 & 복합 대입 연산자 사용
score += 5; // 보너스 점수 5점 추가

// 최대 점수 제한 (연산자 우선순위 활용)
if (score > maxScore + 5) {
    score = maxScore + 5;
}

// ✅ 조건문 (if ~ else if ~ else)로 등급 부여
if (score >= 100) {
    grade = "S";
} else if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// ✅ 삼항 연산자 (합격/불합격 판정)
let status = (score >= 60) ? "Pass" : "Fail";

// ✅ switch문으로 등급별 메시지 출력
let message;
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
}

// ✅ 최종 결과 출력
console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);