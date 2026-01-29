import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 개인 정보
  const profile = {
    name: '이정민',
    nameEn: 'Lee Jeongmin',
    title: 'Backend Developer',
    email: 'top0143@naver.com', // 실제 이메일로 변경하세요
    github: 'https://github.com/yourusername', // 실제 GitHub로 변경하세요
    intro: 'Python과 mysql 기반의 백엔드 개발에 강점이 있으며, 머신러닝과 데이터 파이프라인 구축 경험을 보유하고 있습니다. 문제 해결 능력과 새로운 기술 학습에 대한 열정으로 성장하는 개발자입니다.'
  };

  // 학력
  const education = {
    school: '전주 비전대학교',
    major: '사회복지경영과',
    degree: '전문학사',
    status: '졸업'
  };

  // 교육 이력
  const training = [
    {
      organization: '이젠IT아카데미학원',
      course: '빅데이터 분석을 위한 AI(머신러닝,딥러닝)기반서비스 개발자 양성',
      period: '2025.08 ~ 2026.01',
      duration: '113일, 총 900시간',
      type: 'K-디지털 트레이닝',
      rate: '63%',
      highlights: [
        'Python, Java 기반 AI 서비스 개발',
        '머신러닝 및 딥러닝 모델 구축',
        '빅데이터 분석 및 처리',
        '팀 프로젝트 2회 수행'
      ]
    },
    {
      organization: '전주중앙컴퓨터학원',
      course: '사무행정고급실무(한글,파워포인트,엑셀)',
      period: '2023.10 ~ 2023.12',
      duration: '27일, 총 80시간',
      type: '근로자직업능력개발훈련',
      rate: '52.9%',
      highlights: [
        '엑셀 고급 함수 및 매크로',
        '파워포인트 프레젠테이션 디자인',
        '한글 문서 작성 실무'
      ]
    }
  ];

  // 기술 스택
  const skills = {
    Languages: [
      { name: 'Python', level: 8, desc: '웹 개발, 데이터 처리에 능숙' },
      { name: 'Java', level: 4, desc: '기초 문법 이해' }
    ],
    Database: [
      { name: 'MySQL', level: 8, desc: '쿼리 최적화, 데이터 모델링' }
    ],
    'Backend Frameworks': [
      { name: 'Flask', level: 7, desc: 'RESTful API 개발 경험' },
      { name: 'Django', level: 5, desc: 'MVC 패턴 이해 및 프로젝트 경험' }
    ],
    Frontend: [
      { name: 'HTML5', level: 7, desc: '시맨틱 마크업' },
      { name: 'JavaScript', level: 6, desc: 'DOM 조작, 비동기 처리' },
      { name: 'CSS', level: 4, desc: '기본 스타일링' }
    ],
    'Tools & Collaboration': [
      { name: 'GitHub', level: 8, desc: '버전 관리, 협업' },
      { name: 'Git', level: 6, desc: 'Branch 전략, Merge' },
      { name: 'Linux (Ubuntu)', level: 5, desc: '서버 환경 구축' }
    ]
  };

  // 경력
  const experience = [
    {
      company: '파란손해사정',
      position: '보험금심사 및 약관검토',
      period: '2023.01 - 2023.09',
      duration: '9개월',
      tasks: [
        '보험금 심사 업무 수행 및 대량 데이터 처리',
        '약관 검토 및 분석을 통한 정확도 향상',
        '엑셀 기반 데이터 정리 및 패턴 분석 경험'
      ]
    }
  ];

  // 프로젝트
  const projects = [
    {
      name: 'KIWI - 소비자 오피니언 분석 시스템',
      nameEn: 'Knowledge In, Worthy Information out',
      period: '2025.01 (3주)',
      team: '5인 팀 프로젝트',
      role: '백엔드 개발 / DB 설계 / 데이터 파이프라인',
      description: '앱 사용자 리뷰를 ABSA(Aspect-Based Sentiment Analysis) 기반으로 분석하여 기업 개발팀에게 인사이트를 제공하는 데이터 분석 플랫폼',
      achievements: [
        '10,000+ 앱스토어 리뷰 크롤링 및 전처리',
        'Django MTV 패턴 기반 백엔드 아키텍처 설계',
        'MySQL 데이터베이스 모델링 및 최적화',
        'RAG 기반 챗봇 구현',
        'KcELECTRA 모델 파인튜닝 (F1-score 75%)',
        '자동 보고서 생성 시스템 구축'
      ],
      techStack: ['Python', 'Django', 'MySQL', 'Flask', 'Gemini API', 'HuggingFace', 'ChromaDB', 'RAG', 'NLP', 'Machine Learning'],
      highlights: [
        {
          title: 'ABSA 기반 감성 분석',
          desc: '사용자 리뷰를 6가지 Aspect와 3가지 Sentiment로 분류'
        },
        {
          title: 'RAG 시스템 구축',
          desc: 'Hybrid Search + Cross-Encoder Reranking 활용'
        }
      ],
      github: 'https://github.com/yourusername/kiwi-project'
    },
    {
      name: '희노애애락도 ROCK이다 🤘',
      nameEn: 'Smart Restaurant Recommendation by Emotion',
      period: '2024.12 (3주 6일)',
      team: '5인 팀 프로젝트',
      role: '백엔드 API 개발 / 웹 크롤링 / DB 모델링',
      description: '사용자 리뷰 감성 분석을 통해 현재 감정에 맞는 맛집을 추천하는 대학 상권 특화 서비스',
      achievements: [
        '100만+ 네이버지도 리뷰 데이터 크롤링',
        '전국 10개 지방거점대학교 상권 분석',
        'KoBERT 기반 6개 감정 분류 모델 파인튜닝 (정확도 95%)',
        'Flask 기반 RESTful API 서버 구축',
        'MySQL Transaction 기반 안정적 데이터 수집',
        '날씨/운세 API 연동 맞춤형 추천 기능'
      ],
      techStack: ['Python', 'Flask', 'MySQL', 'Selenium', 'KoBERT', 'NLP', 'Gemini API', 'Machine Learning'],
      highlights: [
        {
          title: '희노애애락 감정 분류',
          desc: '6가지 감정으로 리뷰를 분류하는 앙상블 모델'
        },
        {
          title: '대규모 웹 크롤링',
          desc: 'VPN 활용 봇 탐지 우회, Transaction 기반 무결성 보장'
        }
      ],
      github: 'https://github.com/yourusername/feelconomy-project'
    }
  ];

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #ffffff;
          overflow-x: hidden;
        }

        .portfolio {
          min-height: 100vh;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background: ${isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
          box-shadow: ${isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none'};
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0066ff;
          letter-spacing: -0.02em;
        }

        .nav-menu {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #0066ff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0066ff;
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          color: white;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
          animation: fadeInUp 0.8s ease-out 0.3s backwards;
        }

        .hero-name {
          color: #fbbf24;
          display: inline-block;
        }

        .hero-description {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 2rem auto;
          opacity: 0.95;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2.5rem;
          animation: fadeInUp 0.8s ease-out 0.5s backwards;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }

        .btn-primary {
          background: white;
          color: #0066ff;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #0066ff;
        }

        /* Section */
        .section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-alt {
          background: #f8fafc;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: #1a1a1a;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #0066ff, #667eea);
          margin: 1rem auto 0;
          border-radius: 2px;
        }

        /* Cards */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s;
          border: 1px solid #f0f0f0;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .card-subtitle {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .card-text {
          color: #999;
          font-size: 0.9rem;
        }

        /* Training Cards */
        .training-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s;
          border-left: 4px solid #0066ff;
        }

        .training-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .training-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .training-badge {
          background: linear-gradient(135deg, #0066ff, #667eea);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .training-rate {
          background: #10b981;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .training-course {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 1rem 0;
          line-height: 1.4;
        }

        .training-org {
          color: #666;
          font-size: 1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .training-info {
          display: flex;
          gap: 2rem;
          margin: 1.5rem 0;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #333;
          font-size: 0.9rem;
        }

        .info-icon {
          color: #0066ff;
        }

        .training-highlights {
          margin-top: 1.5rem;
        }

        .training-highlights h4 {
          font-size: 1rem;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .training-highlights ul {
          list-style: none;
          padding: 0;
        }

        .training-highlights li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: #333;
          line-height: 1.6;
        }

        .training-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        /* Skills */
        .skills-category {
          margin-bottom: 3rem;
        }

        .skills-category-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: all 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        .skill-level {
          background: #0066ff;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #0066ff, #667eea);
          border-radius: 10px;
          transition: width 1s ease-out;
        }

        .skill-desc {
          color: #666;
          font-size: 0.9rem;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e5e7eb;
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: 12px;
          top: 0;
          width: 18px;
          height: 18px;
          background: #0066ff;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 2px #0066ff;
        }

        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .timeline-company {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        .timeline-period {
          color: #0066ff;
          font-weight: 600;
        }

        .timeline-position {
          color: #666;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .timeline-tasks {
          list-style: none;
          padding: 0;
        }

        .timeline-tasks li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .timeline-tasks li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #0066ff;
          font-weight: bold;
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s;
          border: 1px solid #f0f0f0;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .project-header {
          margin-bottom: 1rem;
        }

        .project-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .project-name-en {
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          margin: 0.75rem 0;
          flex-wrap: wrap;
        }

        .project-meta-item {
          color: #666;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-role {
          color: #0066ff;
          font-weight: 600;
          font-size: 0.95rem;
          margin: 0.75rem 0;
        }

        .project-description {
          color: #333;
          margin: 1rem 0;
          line-height: 1.8;
        }

        .project-achievements {
          background: #f8fafc;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .project-achievements h4 {
          font-size: 1rem;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .project-achievements ul {
          list-style: none;
          padding: 0;
        }

        .project-achievements li {
          padding: 0.4rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.9rem;
        }

        .project-achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1.5rem 0;
        }

        .tech-tag {
          background: #e0f2fe;
          color: #0066ff;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .project-highlights {
          margin: 1.5rem 0;
        }

        .project-highlights h4 {
          font-size: 1rem;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .highlight-item {
          background: #fafafa;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          border-left: 3px solid #0066ff;
        }

        .highlight-title {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.25rem;
        }

        .highlight-desc {
          color: #666;
          font-size: 0.9rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .project-link {
          color: #0066ff;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s;
        }

        .project-link:hover {
          color: #667eea;
        }

        /* Contact */
        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-message {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: #f8fafc;
          border-radius: 50px;
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 600;
          transition: all 0.3s;
          min-width: 300px;
          justify-content: center;
        }

        .contact-link:hover {
          background: #0066ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,102,255,0.3);
        }

        /* Footer */
        .footer {
          background: #1a1a1a;
          color: white;
          text-align: center;
          padding: 2rem 0;
        }

        .footer-subtitle {
          color: #999;
          margin-top: 0.5rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .nav-menu {
            display: none;
          }

          .section {
            padding: 4rem 1rem;
          }

          .card-grid,
          .skills-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">{profile.name}</div>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#training" className="nav-link">Training</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-subtitle">{profile.title}</div>
            <h1 className="hero-title">
              안녕하세요,<br />
              <span className="hero-name">{profile.name}</span>입니다
            </h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">Education</h3>
            <p className="card-subtitle"><strong>{education.school}</strong></p>
            <p className="card-subtitle">{education.major} ({education.degree})</p>
            <p className="card-text">{education.status}</p>
          </div>
          <div className="card">
            <div className="card-icon">💻</div>
            <h3 className="card-title">Focus</h3>
            <p className="card-subtitle"><strong>Backend Development</strong></p>
            <p className="card-subtitle">Python, Flask, Django</p>
            <p className="card-text">MySQL Database</p>
          </div>
          <div className="card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">Goal</h3>
            <p className="card-subtitle"><strong>성장하는 개발자</strong></p>
            <p className="card-subtitle">문제 해결 능력</p>
            <p className="card-text">끊임없는 학습</p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="section section-alt">
        <h2 className="section-title">Education & Training</h2>
        <div className="card-grid">
          {training.map((item, index) => (
            <div key={index} className="training-card">
              <div className="training-header">
                <div className="training-badge">{item.type}</div>
                <div className="training-rate">이수율 {item.rate}</div>
              </div>
              <h3 className="training-course">{item.course}</h3>
              <p className="training-org">🏢 {item.organization}</p>
              <div className="training-info">
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>{item.period}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>{item.duration}</span>
                </div>
              </div>
              <div className="training-highlights">
                <h4>주요 학습 내용</h4>
                <ul>
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skillList.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}/10</div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level * 10}%` }}></div>
                  </div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-position">{exp.position}</p>
                <ul className="timeline-tasks">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-name-en">{project.nameEn}</p>
                <div className="project-meta">
                  <div className="project-meta-item">📅 {project.period}</div>
                  <div className="project-meta-item">👥 {project.team}</div>
                </div>
                <div className="project-role">💼 {project.role}</div>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-achievements">
                <h4>주요 성과</h4>
                <ul>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="project-highlights">
                <h4>기술적 특징</h4>
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-title">{highlight.title}</div>
                    <div className="highlight-desc">{highlight.desc}</div>
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-message">새로운 기회와 협업을 기다립니다!</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              📧 {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              🔗 GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        <p className="footer-subtitle">Built with React</p>
      </footer>
    </div>
  );
};

export default Portfolio;
