import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

function Products() {
  const [category, setCategory] = useState('전체');
  const categories = ['전체', ...new Set(products.map((p) => p.category))];

  const filtered =
    category === '전체'
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="page">
      <h1>상품 목록</h1>

      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={category === c ? 'filter-btn active' : 'filter-btn'}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((p) => (
          <Link to={`/products/${p.id}`} key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <div className="product-info">
              <span className="category-tag">{p.category}</span>
              <h3>{p.name}</h3>
              <p className="price">{p.price.toLocaleString()}원</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
