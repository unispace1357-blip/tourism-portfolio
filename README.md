# 심재윤 관광 포트폴리오

관광 서비스 · CX · 운영 포트폴리오 웹사이트입니다.

## 포함 내용
- Web business card / About
- Experience & Skills
- Hotel CX Project 01: 예약 VOC 기반 고객경험 개선안
- 반응형 모바일 레이아웃
- GitHub Pages 자동 배포 workflow

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드 확인

```bash
npm run build
npm run preview
```

## GitHub Pages 배포
1. 새 GitHub Repository를 만들고 이 폴더의 파일을 업로드합니다.
2. 기본 브랜치를 `main`으로 사용합니다.
3. GitHub Repository → **Settings → Pages**로 이동합니다.
4. **Build and deployment → Source**에서 `GitHub Actions`를 선택합니다.
5. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.

`vite.config.ts`의 `base: './'` 설정으로 프로젝트형 GitHub Pages 주소에서도 동작하도록 구성했습니다.

## 개인 정보 수정
`src/data/profile.ts` 한 곳에서 프로필을 수정할 수 있습니다.

- 이메일: `email`
- GitHub URL: `githubUrl` (현재 비워둠)
- 경력/교육/스킬

> 공개 웹 포트폴리오에는 주소, 전화번호, 생년월일 등의 민감한 개인정보를 넣지 않는 것을 권장합니다.

## 프로젝트 내용 수정
호텔 CX 프로젝트 텍스트는 `src/data/hotelCx.ts`에 분리되어 있습니다.
두 번째 프로젝트를 추가할 때도 같은 방식으로 데이터 파일을 추가해 확장할 수 있습니다.
