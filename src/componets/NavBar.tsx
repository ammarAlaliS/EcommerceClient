import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className='navContainer'>
      <div className='insideContainer'>
        <h2 className='logo'>Shopping store</h2>
        <ul className='ul'>
          <Link className={`link ${location.pathname === '/' ? 'isActive' : ''}`} to="/">Home</Link>
          <Link className={`link ${location.pathname === '/about' ? 'isActive' : ''}`} to="/about">About</Link>
          <Link className={`link ${location.pathname === '/works' ? 'isActive' : ''}`} to="/works">Works</Link>
          <Link className={`link ${location.pathname === '/feedback' ? 'isActive' : ''}`} to="/feedback">Feedback</Link>
        </ul>
      </div>
    </nav>
  );
}
