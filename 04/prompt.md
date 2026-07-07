##요청
You are an expert Frontend Web Developer and UI/UX Implementer. 
I want to build a website. Here is the Figma design link for reference: 
https://www.figma.com/design/QcN6D7bnDXmqtZ3lRwIJHZ/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=5-698&t=sC8ma1cf3xoZDgld-4
(Note for AI: If you cannot access or visually parse the Figma link, strictly follow the layout and design description provided below.)

[Design Description - 액션표
- Layout: 상단에 설명, 버튼이 7개인 표가있고 버튼에는 Action이라고 작성되어있다
- Colors: 배경은 흰색, 버튼과 포인트 컬러는 #FF383C
- Typography: SF Pro

Please write the code strictly following these technical requirements:

[Tech Stack & Architecture]
- Architecture: Traditional Multi-Page Application (MPA). Do NOT use Single Page Application (SPA) routing or History API.
- HTML: Vanilla Semantic HTML5.
- CSS: Vanilla CSS3. Do NOT use Tailwind, Bootstrap, Sass, or any other CSS framework.
- JS: Vanilla JavaScript (ES6+). Do NOT use React, Vue, jQuery, or any other JS library.
- Environment: Legacy static web approach. No Node.js server, Webpack, or Vite.

[File Structure]
/
├── index.html (Main Page)
├── sub.html (Sub Page)
├── css/
│   ├── common.css (Reset, fonts, global variables, and common header/footer styles)
│   ├── index.css (Styles specific to index.html)
│   └── sub.css (Styles specific to sub.html)
└── js/
    ├── common.js (Common interactions like navigation toggles)
    └── main.js (Interactions specific to the main page)

[Core Development Rules]
1. Common Elements: Since this is an MPA, explicitly write the exact same `<header>` and `<footer>` HTML markup inside every HTML file.
2. Link Files: Ensure `common.css` and `common.js` are linked properly in all HTML files.
3. Page Navigation: All internal links must use standard `href="filename.html"`.
4. Responsive Web: Implement a fully responsive layout (Mobile, Tablet, Desktop) using standard CSS Media Queries (`@media`), Flexbox, and Grid based on the layout description.
