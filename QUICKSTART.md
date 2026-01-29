# 🎯 초보자를 위한 빠른 시작 가이드

포트폴리오를 처음 만드시는 분들을 위한 단계별 가이드입니다!

---

## ✅ 사전 준비물

1. **Node.js 설치 확인**
   ```bash
   node -v
   npm -v
   ```
   
   만약 "command not found" 에러가 나면:
   - Windows: https://nodejs.org 다운로드 및 설치
   - Mac: `brew install node` 실행

2. **GitHub 계정**
   - 없으면 https://github.com 에서 가입

3. **텍스트 에디터**
   - VS Code 추천: https://code.visualstudio.com

---

## 📝 Step 1: 개인 정보 수정 (필수!)

### 1-1. VS Code로 프로젝트 열기
```bash
cd portfolio-react
code .
```

### 1-2. `src/Portfolio.jsx` 파일 열기

### 1-3. 다음 정보 수정
```javascript
// 11번째 줄 근처
const profile = {
  name: '이정민',           // 본인 이름
  email: 'your.email@example.com',  // ← 이거 꼭 바꾸기!
  github: 'https://github.com/yourusername',  // ← 이것도!
  ...
};
```

### 1-4. 프로젝트 GitHub 링크 수정
- 152번째 줄 근처: KIWI 프로젝트 링크
- 181번째 줄 근처: 희노애애락 프로젝트 링크

```javascript
github: 'https://github.com/본인계정/kiwi-project'
```

저장: `Ctrl + S` (Windows) / `Cmd + S` (Mac)

---

## 🚀 Step 2: 로컬에서 테스트

### 2-1. 터미널 열기
VS Code에서: `` Ctrl + ` `` (백틱)

### 2-2. 명령어 실행
```bash
# 의존성 설치 (처음 한 번만)
npm install

# 개발 서버 시작
npm start
```

### 2-3. 브라우저 확인
자동으로 `http://localhost:3000` 열림!

**✅ 여기서 문제없으면 다음 단계로!**

---

## 🌐 Step 3: GitHub에 업로드

### 3-1. GitHub 저장소 만들기
1. https://github.com 로그인
2. 오른쪽 위 `+` → `New repository`
3. Repository name: `portfolio` (원하는 이름)
4. Public 선택
5. `Create repository` 클릭

### 3-2. Git 명령어 실행
```bash
# Git 초기화
git init
git add .
git commit -m "첫 커밋"

# GitHub 연결 (본인 주소로 변경!)
git remote add origin https://github.com/[본인계정]/portfolio.git
git branch -M main
git push -u origin main
```

**✅ GitHub 저장소에 코드가 올라갔는지 확인!**

---

## 🎉 Step 4: GitHub Pages 배포 (무료!)

### 4-1. `package.json` 수정
```json
{
  "homepage": "https://[본인계정].github.io/portfolio"
}
```
예: `https://leejeongmin.github.io/portfolio`

### 4-2. 배포 명령어
```bash
npm run deploy
```

### 4-3. GitHub 저장소 설정
1. GitHub 저장소 페이지 접속
2. 상단 `Settings` 클릭
3. 왼쪽 `Pages` 클릭
4. Source: `gh-pages` 선택
5. `Save` 클릭

### 4-4. 확인
5-10분 후: `https://[본인계정].github.io/portfolio`

**🎊 축하합니다! 포트폴리오 완성!**

---

## 🔧 자주 발생하는 오류

### 1. "npm: command not found"
→ Node.js 설치 필요

### 2. "gh-pages" branch가 안 보여요
→ `npm run deploy` 다시 실행

### 3. 배포했는데 흰 화면만 나와요
→ `package.json`의 `homepage` 주소 확인
→ 정확한 GitHub 계정명과 저장소 이름 확인

### 4. Git 명령어 오류
```bash
# 원격 저장소 다시 설정
git remote remove origin
git remote add origin https://github.com/[본인계정]/portfolio.git
```

---

## 💡 꿀팁

### 코드 수정 후 재배포
```bash
git add .
git commit -m "수정 내용"
git push
npm run deploy
```

### 로컬 테스트 다시 시작
```bash
npm start
```

### 빌드 확인
```bash
npm run build
```

---

## 📞 도움이 필요하면

1. README.md 다시 읽기
2. 에러 메시지 구글 검색
3. GitHub Issues에 질문

---

**화이팅! 🚀**
