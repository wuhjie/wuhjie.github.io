import { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGooglescholar } from 'react-icons/si';

export default function Sidebar() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Check system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Avatar */}
        <div className="avatar-container">
          <img src="/images/avatar.jpg" alt="Avatar" className="avatar" />
        </div>

        {/* Social Links */}
        <nav className="social-nav">
          <a 
            href="https://github.com/wuhjie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon"><FaGithub /></span>
            <span className="social-label">Github</span>
          </a>
          <a 
            href="https://x.com/hjiewuuu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon"><FaXTwitter /></span>
            <span className="social-label">X</span>
          </a>
          <a 
            href="https://linkedin.com/in/wuhjie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon"><FaLinkedin /></span>
            <span className="social-label">LinkedIn</span>
          </a>
          <a 
            href="https://scholar.google.com/citations?user=73QrT2UAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon"><SiGooglescholar /></span>
            <span className="social-label">Scholar</span>
          </a>
          <a 
            href="mailto:wu.hongjie@outlook.com" 
            className="social-link"
          >
            <span className="social-icon"><FaEnvelope /></span>
            <span className="social-label">Email</span>
          </a>
        </nav>

        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </aside>
  );
}
