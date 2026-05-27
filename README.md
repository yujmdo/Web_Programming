# KNU Shop — React Router 쇼핑몰

강원대학교 웹프로그래밍 실습 과제: **React Router 를 이용한 다중 페이지 쇼핑몰** 제작.

## 1. 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | shopping-mall (KNU Shop) |
| 목적 | React Router 를 활용한 SPA(Single Page Application) 다중 페이지 이동 구현 |
| 빌드 도구 | Vite |
| 주요 라이브러리 | React 19, react-router-dom 7 |
| 배포 | Vercel (https://shopping-mall-cjb.vercel.app) |
| 저장소 | GitHub (https://github.com/사용자명/shopping-mall) |

## 2. 주요 기능

1. **다중 페이지 라우팅** — React Router 의 `<BrowserRouter>` / `<Routes>` / `<Route>` 로 4 개 페이지 구성
2. **동적 라우트** — `/products/:id` 형태로 URL 파라미터(`useParams`) 를 이용한 상품 상세 페이지
3. **프로그래매틱 네비게이션** — `useNavigate` 를 이용한 뒤로 가기 / 장바구니 이동
4. **카테고리 필터** — 상품 목록 페이지에서 카테고리별 필터링 (`useState` 활용)
5. **장바구니 상태 관리** — Context API (`CartContext`) 로 전역 상태 공유, 수량 조절·삭제·전체 비우기·주문 처리
6. **NavLink active 스타일** — 현재 경로에 따라 상단 네비 메뉴 강조
7. **404 처리** — 정의되지 않은 경로는 `NotFound` 페이지로

## 3. 페이지 구성

| 경로 | 컴포넌트 | 설명 |
| --- | --- | --- |
| `/` | `pages/Home.jsx` | 메인 페이지. 히어로 배너 + 추천 상품 3 개 |
| `/products` | `pages/Products.jsx` | 전체 상품 목록 + 카테고리 필터 |
| `/products/:id` | `pages/ProductDetail.jsx` | 상품 상세 정보, 장바구니 담기 |
| `/cart` | `pages/Cart.jsx` | 장바구니 목록, 수량 조절, 결제 |
| `*` | `pages/NotFound.jsx` | 404 페이지 |

## 4. 폴더 구조

```
shopping-mall/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 # BrowserRouter, CartProvider 진입점
    ├── App.jsx                  # Routes 정의
    ├── App.css                  # 컴포넌트 전체 스타일
    ├── index.css                # 글로벌 리셋/기본 스타일
    ├── components/
    │   ├── NavBar.jsx           # 상단 네비게이션 (NavLink)
    │   └── Footer.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── ProductDetail.jsx    # useParams + useNavigate
    │   ├── Cart.jsx
    │   └── NotFound.jsx
    ├── context/
    │   └── CartContext.jsx      # 장바구니 전역 상태 (Context API)
    └── data/
        └── products.js          # 더미 상품 데이터 6 종
```

## 5. 핵심 코드 설명

### 5-1. React Router 설정 (`src/main.jsx`)

```jsx
<BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
</BrowserRouter>
```

- 앱 전체를 `BrowserRouter` 로 감싸서 history API 기반의 URL 변경 가능.
- 그 안을 `CartProvider` 로 다시 감싸서 어느 페이지에서나 장바구니 상태 접근 가능.

### 5-2. 라우트 정의 (`src/App.jsx`)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

- `:id` 가 URL 파라미터로 인식되어 `useParams()` 로 접근 가능.

### 5-3. 동적 파라미터 사용 (`src/pages/ProductDetail.jsx`)

```jsx
const { id } = useParams();
const product = products.find((p) => p.id === Number(id));
```

### 5-4. NavLink 활성화 (`src/components/NavBar.jsx`)

```jsx
<NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
  상품목록
</NavLink>
```

## 6. 실행 방법 (로컬)

```bash
cd shopping-mall
npm install
npm run dev
```

`http://localhost:5173` 에서 확인.

## 7. GitHub 등록

```bash
cd shopping-mall
git init
git add .
git commit -m "feat: React Router 쇼핑몰 초기 구현"
git branch -M main
git remote add origin https://github.com/<사용자명>/shopping-mall.git
git push -u origin main
```

## 8. Vercel 배포

1. https://vercel.com 접속 후 GitHub 계정으로 로그인
2. **"Add New… → Project"** 클릭
3. `shopping-mall` 저장소 선택 → **Import**
4. **Configure Project** 화면에서 `Project Name` 을 `shopping-mall-cjb` 로 변경
5. Framework Preset: **Vite** (자동 감지)
6. **Deploy** 클릭
7. 배포 완료 후 도메인 확인: `https://shopping-mall-cjb.vercel.app`

> 💡 만약 `shopping-mall-cjb` 가 이미 사용 중이라는 메시지가 뜨면 `cjb-shopping-mall` 또는 `knu-shop-cjb` 등으로 변형해서 다시 시도.

> ⚠️ SPA 라우팅 주의: Vercel 에 Vite 프로젝트를 배포하면 기본적으로 `/products/3` 같은 새로고침에서도 SPA 가 정상 동작하지만, 혹시 404 가 발생하면 프로젝트 루트에 `vercel.json` 을 추가:
>
> ```json
> { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
> ```

## 9. 검증 결과

| 항목 | 상태 |
| --- | --- |
| Home 페이지 렌더링 | ✅ |
| `/products` 목록 + 카테고리 필터 | ✅ |
| `/products/:id` 동적 라우트 | ✅ |
| 장바구니 담기 / 수량 조절 / 삭제 | ✅ |
| NavLink active 스타일 | ✅ |
| 404 페이지 | ✅ |
| 콘솔 에러 없음 | ✅ |

## 10. 제출 정보

- **GitHub 주소**: `https://github.com/<사용자명>/shopping-mall`
- **배포 도메인**: `https://shopping-mall-cjb.vercel.app`
- **작성자**: 202211867 최중범
- **과목**: 강원대학교 웹프로그래밍 실습 (담당: 송혜정 교수님)
