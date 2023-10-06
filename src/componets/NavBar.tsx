import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

import { FaBars } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useState } from 'react';
import LoginBox from './loginBox';

export default function NavBar() {
  const location = useLocation();
  const [rotate, setRotate] = useState(false);
  const [showLoginBox, setShowLoginBox] = useState(false);

  const rotateIcon = () => {
    setRotate(!rotate);
  };

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <nav className='navContainer'>
      <div className='promotion'>
        <div>
          <p className=' p'>Lorem ipsum dolor, sit amet consectetelit. Quidem voluptrepellat pariatur ducimus. Expedita, labore. Molestias tempora nihil suscipit!</p>
        </div>
        <button className='button'>
          get it
        </button>
      </div>
      <div className='insideContainer'>
        <h2 className='logo'>Shopping store</h2>
        <ul className='ul'>
          <Link className={`link ${location.pathname === '/' ? 'isActive' : ''}`} to="/"><span className='transition'>Home</span></Link>
          <Link className={`link ${location.pathname === '/about' ? 'isActive' : ''}`} to="/about"><span className='transition'>About</span></Link>
          <Link className={`link ${location.pathname === '/works' ? 'isActive' : ''}`} to="/works"><span className='transition'>works</span></Link>
          <Link className={`link ${location.pathname === '/feedback' ? 'isActive' : ''}`} to="/feedback"><span >Feedback</span></Link>
          <li>
            <FiLogIn
              className={`login rotate ${rotate ? 'rotateDeg90' : ''}`}
              onClick={() => {
                rotateIcon();
                toggleLoginBox();
              }}
            />
          </li>

          {showLoginBox && <LoginBox />} {/* Esto mostrará LoginBox si showLoginBox es true */}
        </ul>
        < FaBars className="hanburger" />
      </div>
      <div className='opcions'>
        <ul className='items'>
          <Link className="link2 " to="/feedback">All items</Link>
          <Link className="link2 " to="/feedback">Electronics</Link>
          <Link className="link2 " to="/feedback">Clothing and Fashion</Link>
          <Link className="link2 " to="/feedback">Home and Garden</Link>
        </ul>
      </div>
    </nav>
  );
}
