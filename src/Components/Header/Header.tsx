import { Link } from "react-router-dom"
import LOGO from "../../assets/svg/Logo.svg"
import "./Header.css"

const Header = () => {
  return (
     <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={LOGO} alt="logo not found" className="logo"/>
          <nav className="nav">
            <Link to="#destinations" className="nav-link">
              Destinations
            </Link>
            <Link to="#hotels" className="nav-link">
              Hotels
            </Link>
            <Link to="#flights" className="nav-link">
              Flights
            </Link>
            <Link to="#bookings" className="nav-link">
              Bookings
            </Link>
          </nav>
          <div className="header-actions">
            <a href="#login" className="login-link">Login</a>
            <button className="btn-signup">Sign up</button>
            <div className="language-selector">
             <span>EN </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path 
                  d="M1 1L6 6L11 1" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header