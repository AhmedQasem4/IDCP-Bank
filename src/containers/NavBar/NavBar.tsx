import React, { useState } from 'react';
import { images } from '../../assets';
import { NavMenu } from '../../components';
import {RiMenuAddLine, RiCloseCircleFill } from 'react-icons/ri';
import './NavBar.css';


const NavBar = () => {

  const [toggoleMenu, setToggoleMenu] = useState(false);


  return (
    <nav className='app__navbar flex space__between section__padding'>
      <div className="navbar__logo">
        <img src={images.logo} alt="" />
      </div>
      <div className='navbar__menu-links_container'>
      <NavMenu />
      </div>
      <div className="navbar__button">
        <button className='btn btn-primary'>Service</button>
      </div>
      <div className="navbar__mobile-menu_container">
        {toggoleMenu && <div className="navbar__mobile-menu"> <NavMenu /></div>}
        <div className="navbar__menu-icon">
        {toggoleMenu ? 
        <RiCloseCircleFill size={27} onClick={()=> setToggoleMenu(false)}/>:
        <RiMenuAddLine size={27} onClick={()=> setToggoleMenu(true)}/>}
        </div>
      </div>
    </nav>
  )
}

export default NavBar