# SELFIT

이 프로젝트는 **학원 연습 과제로 진행한 3인 팀프로젝트**입니다. 기획, 디자인, 퍼블리싱을 팀원 3명이 함께 수행했습니다.

SELFIT 메인 페이지를 구현한 React + Vite 프로젝트입니다.  
헤더/메인 섹션/푸터로 구성된 랜딩 페이지 구조를 기반으로, 반응형 스타일과 SVG 아이콘 컴포넌트를 활용해 UI를 구성합니다.

## 팀 프로젝트 역할 분담

- 구채은: 메인 페이지 구현 담당
- 김혜림: 헤더, 푸터 구현 담당
- 조영미: 서브페이지 구현 담당

## 기술 스택

- React 19
- Vite 7
- ESLint 9
- CSS (모듈 없이 전역 스타일 파일 분리)
- `vite-plugin-svgr` (SVG를 React 컴포넌트로 사용)

## 시작하기

### 1) 요구 사항

- Node.js 18 이상 권장
- npm

### 2) 설치

```bash
npm install
```

### 3) 개발 서버 실행

```bash
npm run dev
```

기본적으로 Vite 개발 서버가 실행되며, 터미널에 표시되는 로컬 주소(예: `http://localhost:5173`)로 접속할 수 있습니다.

## 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행 (HMR)
- `npm run build`: 프로덕션 빌드 생성
- `npm run preview`: 빌드 결과 로컬 미리보기
- `npm run lint`: ESLint 검사

## 프로젝트 구조

```text
selfit/
├─ src/
│  ├─ assets/                    # SVG 에셋
│  ├─ components/
│  │  ├─ common/                 # 공통 컴포넌트 (Hero 등)
│  │  ├─ layout/                 # Header / Footer
│  │  └─ main/                   # 메인 섹션 컴포넌트들
│  ├─ hooks/                     # 커스텀 훅
│  ├─ pages/                     # 페이지 단위 컴포넌트
│  ├─ styles/                    # reset/root/style/media/fonts 등 전역 스타일
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
└─ vite.config.js
```

## 화면 구성

`src/pages/Main.jsx` 기준으로 아래 순서로 메인 콘텐츠가 렌더링됩니다.

- Hero
- LiveShow
- News
- Fitting
- Recommend
- Seasonal
- Community

전체 페이지는 `App.jsx`에서 `Header -> Main -> Footer` 구조로 조합됩니다.

## 스타일 가이드 메모

- 스타일은 `src/styles/`와 컴포넌트별 `style.css`로 분리되어 있습니다.
- 엔트리 파일(`main.jsx`)에서 전역 스타일 파일들을 순차 import합니다.
- 반응형 관련 규칙은 `src/styles/media.css`에서 관리합니다.

## 참고 사항

- 일부 이미지 리소스는 `/public/img` 경로를 전제로 사용될 수 있습니다.
- 배포 시 정적 리소스 경로가 올바르게 포함되어 있는지 확인하세요.
