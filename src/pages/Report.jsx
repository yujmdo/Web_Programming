import { Link } from 'react-router-dom';

const promptLog = [
  {
    turn: 1,
    user: 'PDF에 있는 스크린샷 부분의 실습 문제를 연습하고 싶어 도와줘 (React Router PDF — 간단한 쇼핑몰 제작)',
    decisions: [
      '쇼핑몰 페이지 구성: 기본 4페이지 (Home / 상품목록 / 상품상세 / 장바구니)',
      '프로젝트 폴더명: shopping-mall',
      '스타일링 방식: 기본 CSS 파일 (App.css / index.css)',
    ],
    actions: [
      'npm create vite@latest shopping-mall -- --template react 로 프로젝트 생성',
      'npm install + npm install react-router-dom 로 의존성 설치',
      'pages/, components/, context/, data/ 폴더 구조로 컴포넌트 분리',
      'BrowserRouter + Routes + Route 로 4개 라우트 + 404 라우트 구성',
      'Context API 로 장바구니 전역 상태 관리 구현',
      'NavLink active 스타일, useParams, useNavigate 등 React Router 핵심 hook 사용',
      '기본 CSS 로 반응형 그리드 / 카드 디자인 적용',
    ],
  },
  {
    turn: 2,
    user: '웹 페이지에 사진들이 다 자연 배경 사진인데 상품에 맞는 사진들로 바꿔줘',
    actions: [
      '기존: picsum.photos/seed/<keyword>/400/400 → 시드와 무관하게 랜덤 풍경 사진만 반환',
      '교체: loremflickr.com/400/400/<태그>?lock=<n> 형식으로 키워드 기반 Flickr 이미지 사용',
      '6개 상품 모두 naturalWidth/Height 400, complete=true 로 정상 로딩 확인',
    ],
  },
  {
    turn: 3,
    user: '아니 이런 사진이 아니라 진짜 쇼핑몰에 있을법한 상품 사진으로 해줘',
    actions: [
      'Loremflickr 는 일반 Flickr 사진(거리 사진, 셀카 등)이 섞여 나옴',
      'Unsplash 의 검증된 제품 사진 ID 로 교체: images.unsplash.com/photo-<id>?w=600&h=600&fit=crop',
      'HEAD 요청으로 6개 URL 모두 200 OK 확인 후 적용',
      '티셔츠 / 청바지 / 스니커즈 / 가죽 백팩 / 이어폰 / 텀블러 각각 제품샷 적용',
    ],
  },
  {
    turn: 4,
    user: '텀블러 상품의 사진은 텀블러가 아니라 머그잔인데 제대로 된 텀블러 상품 사진으로 바꿔줘',
    actions: [
      'WebFetch 로 unsplash.com/s/photos/stainless-tumbler 검색',
      '"Stainless steel travel mug" 로 명시된 photo-1777500301273-b73640dc490e 선택',
      'products.js 6번 상품 이미지 URL 교체 후 600x600 정상 로딩 검증',
    ],
  },
  {
    turn: 5,
    user: '이제 웹 페이지에 안에 이 채팅에서 나누었던 프롬프트 내용까지 포함해서 웹 페이지 제작 보고서도 만들어줘',
    actions: [
      'Report 페이지 컴포넌트(/report) 추가',
      'NavBar 에 "제작 보고서" 메뉴 추가',
      '프로젝트 개요 / 기술 스택 / 페이지 구성 / 프롬프트 로그 / 검증 결과 / 배포 가이드 섹션 구성',
    ],
  },
];

const techStack = [
  { name: 'React 19', role: 'UI 라이브러리 (함수형 컴포넌트, Hooks)' },
  { name: 'Vite', role: '개발 서버 / 번들러' },
  { name: 'react-router-dom 7', role: 'SPA 다중 페이지 라우팅' },
  { name: 'Context API', role: '장바구니 전역 상태 관리' },
  { name: '기본 CSS', role: '스타일링 (App.css / index.css)' },
  { name: 'GitHub + Vercel', role: '소스 보관 + 자동 배포' },
];

const pageList = [
  { path: '/', name: 'Home', description: '히어로 배너 + 추천 상품 3개' },
  { path: '/products', name: 'Products', description: '전체 상품 목록 + 카테고리 필터' },
  { path: '/products/:id', name: 'ProductDetail', description: 'useParams 동적 라우트, 장바구니 담기' },
  { path: '/cart', name: 'Cart', description: '장바구니 목록, 수량 조절, 결제' },
  { path: '/report', name: 'Report', description: '제작 보고서 (현재 페이지)' },
  { path: '*', name: 'NotFound', description: '404 페이지' },
];

const verificationResults = [
  { item: 'Home 페이지 렌더링', status: '✅' },
  { item: '/products 카테고리 필터', status: '✅' },
  { item: '/products/:id 동적 라우트', status: '✅' },
  { item: '장바구니 담기 / 수량조절 / 삭제', status: '✅' },
  { item: 'NavLink active 스타일', status: '✅' },
  { item: '404 페이지 처리', status: '✅' },
  { item: '상품 이미지 6개 모두 정상 로드 (Unsplash 600x600)', status: '✅' },
  { item: '브라우저 콘솔 에러 없음', status: '✅' },
];

function Report() {
  return (
    <div className="page report-page">
      <h1>제작 보고서</h1>
      <p className="report-lead">
        강원대학교 웹프로그래밍 실습 — <strong>React Router 를 이용한 간단한 쇼핑몰</strong>
        &nbsp;제작 과정 기록.
      </p>

      <section className="report-section">
        <h2>1. 프로젝트 개요</h2>
        <table className="report-table">
          <tbody>
            <tr><th>프로젝트명</th><td>shopping-mall (KNU Shop)</td></tr>
            <tr><th>배포 도메인</th><td><a href="https://shopping-mall-cjb.vercel.app" target="_blank" rel="noreferrer">https://shopping-mall-cjb.vercel.app</a></td></tr>
            <tr><th>목적</th><td>React Router 를 활용한 SPA 다중 페이지 이동 구현</td></tr>
            <tr><th>작성자</th><td>202211867 최중범</td></tr>
          </tbody>
        </table>
      </section>

      <section className="report-section">
        <h2>2. 기술 스택</h2>
        <ul className="report-list">
          {techStack.map((t) => (
            <li key={t.name}>
              <strong>{t.name}</strong> — {t.role}
            </li>
          ))}
        </ul>
      </section>

      <section className="report-section">
        <h2>3. 페이지 / 라우트 구성</h2>
        <table className="report-table">
          <thead>
            <tr>
              <th>경로</th>
              <th>컴포넌트</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {pageList.map((p) => (
              <tr key={p.path}>
                <td><code>{p.path}</code></td>
                <td>{p.name}</td>
                <td>{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="report-section">
        <h2>4. React Router 핵심 코드</h2>
        <p>SPA 다중 페이지 이동의 핵심은 <code>BrowserRouter</code> 안에서 <code>Routes</code> / <code>Route</code>
          로 경로를 매핑하는 부분.</p>
        <pre className="code-block">{`// src/main.jsx — 진입점
<BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
</BrowserRouter>

// src/App.jsx — 라우트 정의
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/report" element={<Report />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// src/pages/ProductDetail.jsx — 동적 파라미터
const { id } = useParams();
const product = products.find((p) => p.id === Number(id));`}</pre>
      </section>

      <section className="report-section">
        <h2>5. 개발 프롬프트 로그</h2>
        <p className="report-note">
          이 프로젝트는 Claude Code 와 대화하며 단계적으로 구현했습니다.
          아래는 사용자 요청 → 의사결정 / 수정 사항을 기록한 로그입니다.
        </p>
        <div className="prompt-log">
          {promptLog.map((p) => (
            <article className="prompt-entry" key={p.turn}>
              <header>
                <span className="turn-badge">Turn {p.turn}</span>
                <h3>💬 {p.user}</h3>
              </header>
              {p.decisions && (
                <>
                  <h4>의사결정</h4>
                  <ul>
                    {p.decisions.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </>
              )}
              <h4>구현 / 수정 내용</h4>
              <ul>
                {p.actions.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="report-section">
        <h2>6. 검증 결과</h2>
        <ul className="check-list">
          {verificationResults.map((v) => (
            <li key={v.item}>
              <span className="check-status">{v.status}</span> {v.item}
            </li>
          ))}
        </ul>
      </section>

      <section className="report-section">
        <h2>7. 배포 (Vercel)</h2>
        <ol className="report-list">
          <li>GitHub 저장소 생성 후 <code>shopping-mall</code> 폴더 push</li>
          <li>vercel.com 로그인 → "Add New… Project" → 해당 저장소 Import</li>
          <li>Framework Preset 이 <strong>Vite</strong> 로 자동 감지됨</li>
          <li>Configure Project 단계에서 Project Name 을 <code>shopping-mall-cjb</code> 로 지정</li>
          <li>Deploy 클릭 → <code>https://shopping-mall-cjb.vercel.app</code> 도메인 생성</li>
        </ol>
      </section>

      <div className="report-cta">
        <Link to="/" className="btn btn-primary">홈으로</Link>
        <Link to="/products" className="btn btn-secondary">상품 목록 보기</Link>
      </div>
    </div>
  );
}

export default Report;
