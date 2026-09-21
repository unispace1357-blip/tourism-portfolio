# 심재윤 관광 포트폴리오

GitHub Pages에 가장 쉽게 배포할 수 있도록 **순수 HTML / CSS / JavaScript**로 구성한 버전입니다.

## 파일 구조

```text
index.html
styles.css
script.js
README.md
```

## GitHub에 올리는 방법

1. 이 ZIP 파일의 압축을 풉니다.
2. GitHub의 `tourism-portfolio` 저장소로 이동합니다.
3. 기존 파일을 모두 지우거나 새 저장소를 만듭니다.
4. `Add file` → `Upload files`를 선택합니다.
5. 압축을 푼 폴더 안의 아래 4개 파일을 전부 업로드합니다.
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
6. `Commit changes`를 누릅니다.

## GitHub Pages 켜기

1. 저장소의 `Settings`로 이동합니다.
2. 왼쪽 메뉴에서 `Pages`를 클릭합니다.
3. `Build and deployment`에서:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. `Save`를 누릅니다.
5. 1~3분 정도 기다린 뒤 Pages 화면을 새로고침하면 사이트 주소가 표시됩니다.

예상 주소:

```text
https://unispace1357-blip.github.io/tourism-portfolio/
```

## 중요

이 버전은 npm, Vite, TypeScript, GitHub Actions가 전혀 필요 없습니다.
GitHub에 파일을 올리고 Pages에서 main/root만 선택하면 됩니다.
