---
name: today-index-links
user-invocable: true
description: "Use when: you want to find today's modified files and add them as links in index.html in one line."
---

# Today Index Links Skill

## 목적
오늘 날짜 기준으로 수정된 파일을 찾아서, 메인 페이지인 index.html에 링크 목록으로 추가하는 작업 흐름을 제공합니다.

## 언제 사용하나
- 오늘 수정한 파일을 한눈에 보고 싶을 때
- index.html에 오늘 업데이트 목록을 추가하고 싶을 때
- 한 줄 요청으로 변경 사항을 정리하고 싶을 때

## 한 줄 요청 예시
- 오늘 수정된 파일 링크 추가해줘
- index.html에 오늘 변경사항 넣어줘
- 오늘 업데이트 목록 만들어줘

## 기본 작업 순서
1. 오늘 날짜를 기준으로 변경된 파일을 찾는다.
2. index.html에 적합한 섹션을 만든다.
3. 찾은 파일들을 상대 경로 링크로 추가한다.
4. 기존 페이지 레이아웃과 어울리게 간단히 스타일한다.

## 추천 삽입 위치
index.html 안의 적절한 위치, 예를 들면:
- 본문 상단
- "오늘 변경 사항" 섹션
- 푸터 위쪽

## 추천 HTML 템플릿
```html
<section class="today-updates">
  <h2>오늘 수정된 파일</h2>
  <ul>
    <li><a href="03/ex3-36.html">03/ex3-36.html</a></li>
    <li><a href="03/css/event.css">03/css/event.css</a></li>
  </ul>
</section>
```

## 추천 CSS 예시
```css
.today-updates {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  background: #fafafa;
}

.today-updates h2 {
  margin-top: 0;
  font-size: 1.1rem;
}

.today-updates ul {
  padding-left: 20px;
}
```

## 작업 원칙
- index.html이 없으면 먼저 생성한다.
- 링크 경로는 실제 파일 위치와 일치해야 한다.
- 수정된 파일이 없으면 "오늘 수정된 파일이 없습니다" 문구를 표시한다.
- 기존 내용과 충돌하지 않도록 섹션을 최소 범위로 추가한다.

## 참고
- 파일을 찾을 때는 오늘 날짜 기준으로 필터링한다.
- 가능하면 사용자에게 보이는 링크는 상대 경로로 작성한다.
- HTML, CSS, JS 파일을 우선적으로 포함한다.
