// 입력창, 버튼, 목록, 전체삭제 버튼, 우선순위 선택창, 할 일 개수 표시 영역 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('priority');
const taskCount = document.getElementById('taskCount');

// 할 일 개수 업데이트 함수
function updateTaskCount() {
    const count = taskList.getElementsByTagName('li').length;
    taskCount.textContent = `현재 할 일: ${count}개`;
}

// 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim(); // 입력값 앞뒤 공백 제거

    if (taskText === "") {
        alert('할 일을 입력해주세요!');
        return;
    }

    // li, span, button 생성
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    // span에 입력 텍스트 넣기
    span.textContent = taskText;

    // 우선순위가 high이면 빨간색 표시
    if (prioritySelect.value === "high") {
        span.style.color = "red";
    }

    // 삭제 버튼 설정
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-button");

    // span 클릭 시 완료 상태 토글
    span.addEventListener('click', function () {
        span.classList.toggle('completed'); // CSS에서 line-through 적용
    });

    // 삭제 버튼 클릭 시 해당 li 제거
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
        updateTaskCount();
    });

    // li에 span과 버튼 추가
    li.appendChild(span);
    li.appendChild(deleteButton);

    // ul에 li 추가
    taskList.appendChild(li);

    // 입력창 초기화
    taskInput.value = "";

    // 할 일 개수 업데이트
    updateTaskCount();
}

// "추가" 버튼 클릭 시 할 일 추가
addButton.addEventListener('click', addTask);

// Enter 키 입력 시 할 일 추가
taskInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// "전체 삭제" 버튼 클릭 시 모든 할 일 제거
clearButton.addEventListener('click', function () {
    taskList.innerHTML = ""; // ul 안의 모든 li 제거
    updateTaskCount();
});

// 페이지 로드 시 초기 개수 표시
updateTaskCount();