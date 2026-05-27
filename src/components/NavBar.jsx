import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function NavBar() {
  const { totalCount } = useCart();

  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          🛒 KNU Shop
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={linkClass} end>
            홈
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            상품목록
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            장바구니 ({totalCount})
          </NavLink>
          <NavLink to="/report" className={linkClass}>
            제작 보고서
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
