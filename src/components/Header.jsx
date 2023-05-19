import { Link } from 'react-router-dom';
import Home from './Home';

const Header = () => {
  return (
    <header>
        <nav>
            <figure>
                <Link to={ Home }><img src="" alt="John Market logo" /></Link>
            </figure>
            <ul>
                <li></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header