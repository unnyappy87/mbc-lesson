---
name: daily-update
user-invocable: true
description: "Use when: you want to add today's date, a modification notice, or a simple update block to an HTML page in one line."
---

# Daily Update Skill

## 목적
HTML 페이지에서 매일 수정 내용을 쉽게 반영할 수 있도록, 오늘 날짜와 수정 안내를 빠르게 추가하는 작업 흐름을 제공합니다.

## 언제 사용하나
- 오늘 날짜를 표시하고 싶을 때
- "수정일" 안내를 추가하고 싶을 때
- 한 줄 요청으로 업데이트 박스를 넣고 싶을 때

## 한 줄 요청 예시
- 오늘 날짜로 수정해줘
- 수정일 추가해줘
- 업데이트 박스 넣어줘

## 기본 동작
1. 기존 HTML 구조를 유지한다.
2. 오늘 날짜를 자동으로 반영한다.
3. 수정 안내가 필요하면 간단한 박스 형태로 추가한다.
4. CSS는 기존 스타일과 어울리게 최소 수정한다.

## 추천 템플릿
```html
<div class="update-info">
  <p class="update-date">수정일: 2026-07-09</p>
  <ul class="update-list">
    <li>기능 유지</li>
    <li>오늘 날짜 기준 안내 추가</li>
  </ul>
</div>
```

## 자동 날짜 표시 방법
```html
<p id="today"></p>
<script>
  const today = new Date();
  document.getElementById("today").textContent =
    "수정일: " + today.toISOString().slice(0, 10);
</script>
```

## 스타일 예시
```css
.update-info {
  margin-bottom: 15px;
  padding: 10px 12px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 6px;
}

.update-date {
  margin: 0 0 8px;
  font-weight: bold;
}

.update-list {
  margin: 0;
  padding-left: 20px;
}
```

## 작업 원칙
- 불필요한 변경은 최소화한다.
- 기존 파일의 구조와 스타일을 해치지 않는다.
- 날짜는 실제 오늘 날짜를 기준으로 반영한다.
