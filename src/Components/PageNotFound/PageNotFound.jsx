import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="title">404</h1>
      <p className="message">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  )
}

export default PageNotFound