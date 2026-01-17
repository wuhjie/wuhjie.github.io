import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/work">WORK</Link></li>
        <li><Link to="/thoughts">THOUGHTS</Link></li>
      </ul>
    </nav>
  );
}
