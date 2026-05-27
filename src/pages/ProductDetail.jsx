import { useParams, useNavigate, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="page">
        <h1>상품을 찾을 수 없습니다</h1>
        <p>요청하신 상품(id: {id})이 존재하지 않습니다.</p>
        <Link to="/products" className="btn btn-primary">
          상품 목록으로
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    const goToCart = window.confirm(
      `${product.name}을(를) 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?`
    );
    if (goToCart) navigate('/cart');
  };

  return (
    <div className="page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← 뒤로
      </button>

      <div className="detail-layout">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <span className="category-tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price-large">{product.price.toLocaleString()}원</p>
          <p className="description">{product.description}</p>

          <div className="detail-actions">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              장바구니에 담기
            </button>
            <Link to="/products" className="btn btn-secondary">
              다른 상품 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
