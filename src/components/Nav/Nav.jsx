import React, { useState } from 'react'
import './Nav.css'
function Nav() {
  const [img, setImg] = useState('menu.svg');
  const changeImg = () => {
    setImg((currentImg) => {
      if (currentImg == "menu.svg") {
        setStyle(0);
        return "cross.svg";
      }
      else {
        setStyle("-100%");
        return "menu.svg";
      }
    }
    );
  };

  const [style, setStyle] = useState("-100%");
  const menuStyles = {
    right: style,
  }

  return (
    <>
      <div className='main-nav-area'>
        <div className="img-area"><img src="2.png" alt="logo" /><h3>DOWNLOAD MP3</h3></div>
        <ul className='desktop-ul'>
          <li>Tools</li>
          <li>About</li>
          <li>Premium</li>
          <li>Contacts</li>
        </ul>
        <button className='menu-btn' onClick={changeImg}>
          <img src={img} alt="menu" />
        </button>
      </div>
      <div className="menu-area" style={menuStyles}>
        <ul className='android-ul'>
          <li>Tools</li>
          <li>About</li>
          <li>Premium</li>
          <li>Contacts</li>
        </ul>
      </div >
    </>
  );
}

export default Nav
