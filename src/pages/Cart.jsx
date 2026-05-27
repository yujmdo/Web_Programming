import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h1>장바구니</h1>
        <div className="empty-cart">
          <p>장바구니가 비어 있습니다 🛒</p>
          <Link to="/products" className="btn btn-primary">
            상품 보러 가기
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    alert(`주문이 완료되었습니다!\n총 결제 금액: ${totalPrice.toLocaleString()}원`);
    clearCart();
  };

  return (
    <div className="page">
      <h1>장바구니</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <Link to={`/products/${item.id}`}>
                <h3>{item.name}</h3>
              </Link>
              <p className="price">{item.price.toLocaleString()}원</p>
            </div>
            <div className="qty-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <p className="line-total">
              {(item.price * item.quantity).toLocaleString()}원
            </p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>
          총 결제 금액: <strong>{totalPrice.toLocaleString()}원</strong>
        </p>
        <div className="cart-actions">
          <button className="btn btn-secondary" onClick={clearCart}>
            전체 비우기
          </button>
          <button className="btn btn-primary" onClick={handleCheckout}>
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
