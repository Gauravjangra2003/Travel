import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
     <header className="header">
      <div className="container">
        <div className="header-content">
          <img src="/assets/svg/Logo.svg" alt="logo not found" className="logo"/>
          <nav className="nav">
             <a href="#destinations" className="nav-link">
              Destinations
            </a>
            <a href="#hotels" className="nav-link">
              Hotels
            </a>
            <a href="#flights" className="nav-link">
              Flights
            </a>
            <a href="#bookings" className="nav-link">
              Bookings
            </a>
          </nav>
          <div className="header-actions">
            <Link to="#login" className="login-link">Login</Link>
            <button className="btn-signup">Sign up</button>
            <div className="language-selector"> 
             <span>EN </span>
             <img src="/assets/svg/downarrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header