import { useState } from 'react';

const contents = ["home", "about", "skill", "project", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hello World</a>
      </div>
      
      {/* Desktop Menu */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {contents.map(content => (
            <li key={content}>
              <a href={`#${content}`} className="capitalize hover:bg-base-200">
                {content}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex-none lg:hidden">
        <button 
          className="btn btn-square btn-ghost"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden">
          <ul className="menu menu-vertical p-2">
            {contents.map(content => (
              <li key={content}>
                <a 
                  href={`#${content}`} 
                  className="capitalize hover:bg-base-200 py-3"
                  onClick={closeMenu}
                >
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}