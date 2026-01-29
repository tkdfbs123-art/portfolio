#!/bin/bash

echo "🚀 GitHub Pages 배포 시작..."
echo ""

# 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}1. 의존성 설치 중...${NC}"
npm install

echo ""
echo -e "${BLUE}2. 빌드 시작...${NC}"
npm run build

echo ""
echo -e "${BLUE}3. GitHub Pages에 배포 중...${NC}"
npm run deploy

echo ""
echo -e "${GREEN}✅ 배포 완료!${NC}"
echo ""
echo -e "${YELLOW}5-10분 후 아래 주소에서 확인하세요:${NC}"
echo "https://[yourusername].github.io/portfolio"
echo ""
echo -e "${YELLOW}⚠️ package.json의 homepage를 본인 주소로 변경했는지 확인하세요!${NC}"
