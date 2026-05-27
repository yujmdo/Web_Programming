import { Link } from 'react-router-dom';
import products from '../data/products';

function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="page">
      <section className="hero-section">
        <h1>KNU Shop에 오신 것을 환영합니다</h1>
        <p>React Router로 만든 간단한 쇼핑몰 데모</p>
        <Link to="/products" className="btn btn-primary">
          상품 보러 가기 →
        </Link>
      </section>

      <section>
        <h2>추천 상품</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="price">{p.price.toLocaleString()}원</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
