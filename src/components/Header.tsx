import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Hongjie Wu</h1>
          <p className="subtitle">Trustworthy machine learning, uncertainty-aware modelling, and natural language processing.</p>
          <p className="version">v. 2026</p>
        </Link>
      </div>
    </header>
  );
}
