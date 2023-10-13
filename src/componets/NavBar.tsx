// NavBar.jsx
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

import { FaBars } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { BiSolidHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { useState } from 'react';
import LoginBox from '../componets/loginBox';  // Asegúrate de que la ruta del archivo sea correcta
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

export default function NavBar() {
  const location = useLocation();
  const [showLoginBox, setShowLoginBox] = useState(false);

  const showLogginPage = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <nav className='navContainer'>
      <div className='promotion'>
        <div>
          <p className='p'>Lorem ipsum dolor, sit amet consectetelit. Quidem voluptrepellat pariatur ducimus. Expedita, labore. Molestias tempora nihil suscipit!</p>
        </div>
        <button className='button'>
          get it
        </button>
      </div>

      <div className='insideContainer'>
        <h2 className='logo'>Esocial</h2>
        <ul className='ul'>
          <Link className={`link ${location.pathname === '/' ? 'isActive' : ''}`} to="/"><span className='transition'>Home</span></Link>
          <Link className={`link ${location.pathname === '/about' ? 'isActive' : ''}`} to="/about"><span className='transition'>About</span></Link>
          <Link className={`link ${location.pathname === '/works' ? 'isActive' : ''}`} to="/works"><span className='transition'>works</span></Link>
          <Link className={`link ${location.pathname === '/feedback' ? 'isActive' : ''}`} to="/feedback"><span >Feedback</span></Link>
          <li>
            <FiLogIn
              className="login"
              onClick={() => {
                showLogginPage();
              }}
            />
          </li>

          {showLoginBox && <LoginBox setShowLoginBox={setShowLoginBox} />}
        </ul>
        <div className='serchBox2'>
          <div className='serchBox'>
            <input className='inputSerch' type="text" />
            <li className='currentValue serch'><span className='serchIcon'><BsSearch className="dolar trasitionScale" /></span></li>
          </div>
        </div>
        <FaBars className="hanburger" />
      </div>

      <div className='opcions'>
        <div className='items'>
          <ul className='productosLinks'>
            <Link className="link2 " to="/feedback">All items</Link>
            <Link className="link2 " to="/feedback">Electronics</Link>
            <Link className="link2 " to="/feedback">Clothing and Fashion</Link>
            <Link className="link2 " to="/feedback">Home and Garden</Link>
          </ul>
          <ul className='icons'>
            <div className='serchBox'>
              <input className='inputSerch' type="text" />
              <li className='currentValue serch'><span className='serchIcon'><BsSearch className="dolar trasitionScale" /></span></li>
            </div>
            <li className='currentValue'><CgProfile className="profileIcon trasitionScale" /></li>
            <li className='currentValue'><BiSolidHeart className="heart" /></li>
            <li className='currentValue'><BiDollar className="dolar" /><strong className='value'>0.00</strong></li>
            <li className='currentValue'><AiOutlineShoppingCart className="shopingCard trasitionScale" /><strong className='productSelected'>10</strong></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
