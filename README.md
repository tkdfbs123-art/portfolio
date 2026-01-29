<<<<<<< HEAD
# 이정민 - 개발자 포트폴리오

React로 제작한 개인 포트폴리오 웹사이트입니다.

## 🚀 빠른 시작

### 1. 프로젝트 설정

```bash
# 1. 프로젝트 폴더로 이동
cd portfolio-react

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm start
```

브라우저에서 `http://localhost:3000` 자동 오픈됩니다!

---

## 📝 개인 정보 수정 방법

`src/Portfolio.jsx` 파일을 열어서 다음 정보를 수정하세요:

### 1. 기본 정보 (11-17번째 줄)
```javascript
const profile = {
  name: '이정민',
  nameEn: 'Lee Jeongmin',
  title: 'Backend Developer',
  email: 'your.email@example.com', // ← 실제 이메일로 변경
  github: 'https://github.com/yourusername', // ← 실제 GitHub 주소
  intro: '...'
};
```

### 2. GitHub 프로젝트 링크 (152, 181번째 줄 근처)
```javascript
github: 'https://github.com/yourusername/kiwi-project' // ← 실제 프로젝트 링크
```

---

## 🌐 GitHub Pages 배포 (무료 호스팅!)

### Step 1: GitHub 저장소 생성
1. GitHub에서 새 저장소 생성
2. 저장소 이름: `portfolio` (원하는 이름)
3. Public으로 설정

### Step 2: package.json 수정
```json
{
  "homepage": "https://[yourusername].github.io/portfolio"
}
```
`[yourusername]`을 본인 GitHub 계정명으로 변경!

### Step 3: 배포 명령어 실행
```bash
# Git 초기화 (처음만)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[yourusername]/portfolio.git
git push -u origin main

# GitHub Pages 배포
npm run deploy
```

### Step 4: GitHub 저장소 설정
1. GitHub 저장소 → Settings → Pages
2. Source: `gh-pages` branch 선택
3. Save 클릭

5-10분 후 `https://[yourusername].github.io/portfolio`에서 확인!

---

## 📂 프로젝트 구조

```
portfolio-react/
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── index.js           # React 엔트리 포인트
│   └── Portfolio.jsx      # 메인 컴포넌트 (이 파일만 수정하면 됨!)
├── package.json           # 프로젝트 설정
└── README.md             # 이 파일
```

---

## 🎨 커스터마이징 가이드

### 색상 변경
`Portfolio.jsx` 파일에서 색상 검색 후 변경:
- Primary Color: `#0066ff` (파란색)
- Gradient: `#667eea` → `#764ba2` (보라색 그라디언트)
- Success: `#10b981` (초록색)

### 폰트 변경
`public/index.html`의 Pretendard 폰트 링크를 다른 폰트로 교체

### 섹션 추가/삭제
`Portfolio.jsx`에서 `<section>` 태그로 감싸진 부분을 추가/삭제

---

## 🔧 트러블슈팅

### "npm: command not found"
Node.js가 설치되지 않았습니다.
```bash
# macOS
brew install node

# Windows
# https://nodejs.org 에서 다운로드
```

### 배포 후 흰 화면
`package.json`의 `homepage` 주소 확인:
```json
"homepage": "https://[정확한username].github.io/[정확한repository이름]"
```

### GitHub 저장소가 이미 있는 경우
```bash
git remote set-url origin https://github.com/[yourusername]/portfolio.git
npm run deploy
```

---

## 📱 반응형 지원

✅ 데스크톱 (1200px+)  
✅ 태블릿 (768px - 1199px)  
✅ 모바일 (~ 767px)

---

## 🎯 주요 기능

- ✨ 부드러운 스크롤 애니메이션
- 🎨 모던한 그라디언트 디자인
- 📊 스킬 레벨 시각화
- 💼 프로젝트 상세 정보
- 📧 원클릭 연락처
- 📱 완벽한 모바일 지원

---

## 💡 추가 개선 아이디어

1. **다크 모드 추가**
   - 토글 버튼 만들기
   - `useState`로 테마 상태 관리

2. **프로젝트 이미지 추가**
   - `public/images/` 폴더 생성
   - `<img>` 태그로 스크린샷 표시

3. **애니메이션 라이브러리**
   - Framer Motion 설치: `npm install framer-motion`
   - 더 화려한 애니메이션 추가

4. **Google Analytics**
   - 방문자 통계 추적
   - 어떤 섹션을 가장 많이 보는지 분석

---

## 📞 문의

포트폴리오 관련 문의: your.email@example.com  
GitHub: https://github.com/yourusername

---

**Made with ❤️ using React**
=======
# portfolio
>>>>>>> 03347fc3372ec559a4b46bbc5c1dda59418ae93d
