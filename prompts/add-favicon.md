# Favicon 추가 프롬프트

## 목적
`index.html` 문서에 SVG 형식의 파비콘을 추가합니다.

## 프롬프트 내용
`@index.html 문서에 @favicon.svg를 파비콘으로 넣어`

## 적용 코드
```html
<link rel="icon" type="image/svg+xml" href="favicon.svg" />
```

## 참고 사항
- `type="image/svg+xml"` 속성을 사용하여 SVG 파일임을 명시합니다.
- 파일 경로가 `index.html`과 동일한 위치에 있는지 확인해야 합니다.
