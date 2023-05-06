
import { images } from '../../assets';
import './NavMenu.css';

const NavMenu = () => {
  return (
      <ul  className='navbar__menu-links flex space__between'>
        <li>
          <a href="#">Retail</a>
        </li>
        <li>
          <a href="#">sme</a>
        </li>
        <li>
          <a href="#">corporate</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">covid 19</a>
        </li>
        <li>
          <a href="#">campgains</a>
        </li>
      <img src={images.magnifier} alt="magnifier logo " />
      </ul>
  )
}

export default NavMenu