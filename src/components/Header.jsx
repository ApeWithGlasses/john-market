import { Link } from 'react-router-dom';
import Logo from '../assets/johnMarketLogo.png';

const Header = () => {
  return (
    <header>
        <nav>
            <figure>
                <Link to={'/'}><img src={ Logo } alt="John Market logo" /></Link>
            </figure>
            <ul>
                <li><Link to={'/products'}>Products</Link></li>
                <li><input type="text" placeholder='Search'/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header