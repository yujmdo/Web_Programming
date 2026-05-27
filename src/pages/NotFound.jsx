import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="btn btn-primary">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
