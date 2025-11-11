import { Link } from "react-router-dom"
import LOGO from "../../assets/svg/Logo.svg"
import DOWNARROW from "../../assets/svg/downarrow.svg"
import "./Header.css"

const Header = () => {
  return (
     <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={LOGO} alt="logo not found" className="logo"/>
          <nav className="nav">
            <Link to="/destinations" className="nav-link">
              Destinations
            </Link>
            <Link to="/hotels" className="nav-link">
              Hotels
            </Link>
            <Link to="/flights" className="nav-link">
              Flights
            </Link>
            <Link to="/bookings" className="nav-link">
              Bookings
            </Link>
          </nav>
          <div className="header-actions">
            <Link to="#login" className="login-link">Login</Link>
            <button className="btn-signup">Sign up</button>
            <div className="language-selector"> 
             <span>EN </span>
             <img src={DOWNARROW} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header