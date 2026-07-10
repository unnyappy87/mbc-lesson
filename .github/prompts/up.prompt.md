---
mode: agent
description: "Use /up to add today's modified files as links in index.html."
---

Use this command to find files modified today and add them as links in index.html.

Rules:
- Keep the change minimal and clean.
- Use relative links that match the actual file paths.
- If index.html does not exist, create a simple one with a section for today's updates.
- If there are no matching files, show a short message such as "오늘 수정된 파일이 없습니다."
