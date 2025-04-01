# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 사용자 CRUD 프로젝트

사용자 정보를 **추가 / 수정 / 삭제 / 검색 / 정렬 / 저장**할 수 있는 React 기반의 사용자 관리 앱입니다.

## 사용 기술

- React + Vite
- Tailwind CSS
- localStorage

## 주요 기능

- 사용자 정보 입력 (이름, 나이, 성별)
- 사용자 목록 출력 (리스트 형태)
- 사용자 **검색** (이름 기준 포함 검색)
- **이름 / 나이 기준 정렬** 기능
- 사용자 **수정 / 삭제** 기능
- **전체 초기화** 및 **localStorage 저장** 기능

## 데모 화면 (선택)

추후 캡처 이미지 또는 배포 링크 추가 예정

## 폴더 구조

```
src/
├── components/
│   ├── Userform.jsx      # 사용자 입력 폼
│   ├── Useritem.jsx      # 사용자 개별 항목
│   └── Userlist.jsx      # 사용자 목록
├── App.jsx               # 메인 컴포넌트
└── main.jsx              # 진입점
```

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 향후 추가 아이디어

- 필터링: 성별 / 나이 범위 등
- 페이징 처리
- 백엔드 연동 (예: Supabase, Firebase)
- 로그인 및 사용자 인증 기능
