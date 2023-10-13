import { AiOutlineClose } from 'react-icons/ai';
import '../styles/login.css';
import { useState } from 'react';

export default function LoginBox({ setShowLoginBox }) {
  const [emailInputIsActive, setEmailInputIsActive] = useState(false);
  const [passwordInputIsActive, setPasswordInputIsActive] = useState(false);

  const handleEmailInputChange = (event) => {
    const inputValue = event.target.value;
    setEmailInputIsActive(inputValue.trim() !== "");
  };

  const handlePasswordInputChange = (event) => {
    const inputValue = event.target.value;
    setPasswordInputIsActive(inputValue.trim() !== "");
  };

  return (
    <div className="div">
      <div className="formBox">
        <div className='formInfo'>
          <h2>Start sharing your products with the World </h2>
        </div>
        <form className='form'>
          <AiOutlineClose
            className="lineClose"
            onClick={() => {
              setShowLoginBox(false);
            }}
          />
          <div className='userInfo'>
            <h3 className='formTitle'>Login</h3>

            <input
              className={`input ${emailInputIsActive ? 'inputIsActive' : ''}`}
              placeholder='Email'
              type="text"
              onChange={handleEmailInputChange}
            />

            <input
              className={`input ${passwordInputIsActive ? 'inputIsActive' : ''}`}
              placeholder='Password'
              type="password"
              onChange={handlePasswordInputChange}
            />
            <button className='loginButton'>Login</button>
            <button className='btn btnEmail'>Email</button>
            <button className='btn btnApple'>Apple</button>
          </div>
          <ul className='ul2'>
            <li className='createAccount'>create account</li>
            <li className='forgotPassword'>Forgot password?</li>
          </ul>
        </form>
      </div>
    </div>
  );
}
