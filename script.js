const journeyData = {
  "탐색": {
    action: "호텔·리조트 후보를 검색하고 위치, 가격, 특징을 비교합니다.",
    info: "위치 · 가격 · 주요 특징",
    pain: "정보가 많아 숙소별 핵심 차이를 빠르게 파악하기 어려울 수 있습니다.",
    question: "“이 호텔은 다른 곳과 무엇이 다른가요?”"
  },
  "객실 비교": {
    action: "객실 타입과 패키지, 가격, 혜택을 비교합니다.",
    info: "객실 타입 · 테마 · 침대 · 포함 혜택",
    pain: "비슷한 이름의 상품이나 객실 간 차이가 명확하지 않을 수 있습니다.",
    question: "“사진에 나온 테마 객실을 선택할 수 있나요?”"
  },
  "예약": {
    action: "원하는 상품을 선택하고 결제 및 예약을 진행합니다.",
    info: "배정 조건 · 포함사항 · 변경·취소 조건",
    pain: "구매 결정에 영향을 주는 중요 조건을 놓칠 가능성이 있습니다.",
    question: "“이 패키지에 조식도 포함된 건가요?”"
  },
  "예약 확인": {
    action: "예약번호, 객실, 이용조건 등 예약 내용을 다시 확인합니다.",
    info: "예약상태 · 객실 조건 · 취소 규정",
    pain: "예약이 정상적으로 되었는지 또는 선택한 조건이 맞는지 재확인할 수 있습니다.",
    question: "“제가 어떤 객실로 예약된 건지 다시 확인할 수 있을까요?”"
  },
  "방문 준비": {
    action: "체크인 방법과 주차, 조식, 부대시설 등 실제 방문 정보를 확인합니다.",
    info: "체크인 · 주차 · 조식 · 시설 운영정보",
    pain: "필요한 정보가 여러 페이지나 채널에 분산되어 있을 수 있습니다.",
    question: "“주차는 어디에 하고 체크인은 몇 시부터 가능한가요?”"
  },
  "체크인": {
    action: "현장에 도착해 객실 배정과 실제 이용조건을 최종 확인합니다.",
    info: "객실 배정 · 혜택 이용방법 · 현장 안내",
    pain: "예약 전 형성한 기대와 실제 제공조건 사이에 차이가 드러날 수 있습니다.",
    question: "“제가 생각했던 객실과 다른데 변경할 수 있나요?”"
  }
};

const buttons = document.querySelectorAll("#journey button");
const detail = document.getElementById("journeyDetail");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const d = journeyData[button.dataset.step];
    detail.innerHTML = `
      <p class="small-label">JOURNEY DETAIL</p>
      <strong>${button.dataset.step}</strong>
      <div class="journey-columns">
        <div><span>CUSTOMER ACTION</span>${d.action}</div>
        <div><span>NEEDED INFO</span>${d.info}</div>
        <div><span>PAIN POINT</span>${d.pain}</div>
      </div>
      <div class="journey-question">${d.question}</div>
    `;
  });
});
