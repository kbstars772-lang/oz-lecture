// async_assignment.js

// DOM 요소 가져오기
const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// 상수, 변수 선언
const MAX_TIME = 10; // const 사용 예시
var timerMessage = ""; // var 사용 예시
let timerCount; // let 사용 예시

// 입력 초기화
const resetTimerInput = () => {
  // 입력란 초기화
  timerInput.value = "";
};

// 출력 초기화
const resetTimerDisp = () => {
  // 출력 영역 초기화
  timerDisplay.textContent = "";
  timerDisplay.classList.remove("error");
};

// 초 표시
const showTimerSec = (sec) => {
  resetTimerDisp();
  timerMessage = "타이머: " + sec + "초";
  timerDisplay.textContent = timerMessage;
};

// 종료 메시지 표시
const showTimerComplete = () => {
  resetTimerDisp();
  timerDisplay.textContent = "타이머 종료!";
  // 버튼 재활성화
  startTimer.disabled = false;
};

// 에러 메시지 표시
const showTimerError = (message) => {
    resetTimerDisp();
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
  // 버튼 재활성화
  startTimer.disabled = false;
};

// 타이머 실행
function processTimer(seconds = 10) {
  // 타이머 시작
  showTimerSec(seconds);

  // 1초마다 반복
  const timer = setInterval(() => {
    seconds -= 1; // 초 감소

    // 남은 시간이 0 이상이면 표시
    if (seconds >= 0) {
      showTimerSec(seconds);
    } else {
      // 타이머 종료
      clearInterval(timer);
      showTimerComplete();
    };
  }, 1000);
}

// 버튼 클릭 이벤트 처리
function handleClickTimer() {
  try {
    // 입력값 가져오기
    let time = Number(timerInput.value);

    // 입력 유효성 검사
    if (isNaN(time) || time < 1 || time > MAX_TIME) {
      throw new Error("유효한 숫자(1-10)를 입력하세요!");
    }

    // 버튼 비활성화
    startTimer.disabled = true;

    // 타이머 실행
    processTimer(time);
  } catch (error) {
    // 오류 메시지 출력
    showTimerError(error.message);
    resetTimerInput();
  }
}

// 이벤트 리스너 등록
startTimer.addEventListener("click", handleClickTimer);












































// const timerInput = document.querySelector("#timerInput");
// const startTimer = document.querySelector("#startTimer");
// const timerDisplay = document.querySelector("#timerDisplay");
// const MAX_SEC = 10;

// const resetTimerInput = () => {
//   // timerInput 초기화
// };

// const resetTimerDisp = () => {
//   timerDisplay.innerHTML = "";
// };

// const showTimerSec = (sec) => {
//   resetTimerDisp();
//   const p = document.createElement("p");
//   p.textContent = `${sec}초`;
//   timerDisplay.appendChild(p);
// };

// const showTimerComplete = () => {
//   resetTimerDisp();
//   const p = document.createElement("p");
//   p.textContent = "타이머 종료!!!";
//   timerDisplay.appendChild(p);
// };

// const showTimerError = (message) => {
//   // timerDisplay에 오류 메세지 표시
//   resetTimerDisp();
//   const p = document.createElement("p");
//   p.textContent = message;
//   p.classList.add("error");
//   timerDisplay.appendChild(p);
// };

// const processTimer = (sec) => {
//   console.log("processTimer", sec);
//   showTimerSec(sec);
//   startTimer.disabled = true;

//   const timer = setInterval(() => {
//     sec -= 1;
//     if (sec > 0) {
//       showTimerSec(sec);
//     }
//     if (sec <= 0) {
//       clearInterval(timer);
//       showTimerComplete();
//       startTimer.disabled = false;
//     }
//   }, 1000);
// };

// // 타이머 시작
// function handleClickTimer() {
//   console.log("타이머 시작");

//   const sec = timerInput.value;
//   const secNum = Number(sec);
//   // 유효성 검증
//   if (isNaN(secNum)) {
//     showTimerError("숫자를 입력해주세요.");
//     return;
//   }
//   if (secNum < 1 || secNum > MAX_SEC) {
//     showTimerError(`1에서 ${MAX_SEC} 사이의 숫자를 입력해주세요.`);
//     return;
//   }
//   processTimer(secNum);
//   resetTimerInput();
// }

// startTimer.addEventListener("click", handleClickTimer);
// startTimer.onclick = handleClickTimer;
