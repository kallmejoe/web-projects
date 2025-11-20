import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <svg width="91" height="34" viewBox="0 0 91 34" fill="none">
              <path d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.024 0l7.026 4.056v4.056z" fill="#A435F0"/>
              <text x="20" y="24" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="#000">udemy</text>
            </svg>
          </div>
          <nav className="nav-links">
            <a href="#categories">Categories</a>
          </nav>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-right">
          <a href="#plans">Plans & Pricing</a>
          <a href="#business">Udemy Business</a>
          <a href="#teach">Teach on Udemy</a>
          <button className="cart-btn">🛒</button>
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
          <button className="btn-language">🌐</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
