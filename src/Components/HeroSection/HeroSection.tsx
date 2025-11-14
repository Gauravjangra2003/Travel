import "./HeroSection.css";
import heroimg from "../../../public/assets/images/HeroImg.png"
import playbtn from "../../../public/assets/svg/Playbutton.svg"

export const HeroSection = () => {
  return (
    <div className="hero-content">
     <div className="hero-container">
       <div className="herotext">
           <div className="hero-section-label">BEST DESTINATIONS AROUND THE WORLD</div>
            <h1 className="hero-title">
              Travel, <span className="highlight">enjoy</span> <br /> and live a new <br />and full life
            </h1>
             <p className="hero-description">
              Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.
            </p>
              <div className="hero-actions">
              <button className="playbtn">Find out more</button>
              <img className="playimg" src={playbtn} alt="" />
               <p className="playdemo">Play Demo</p>
            </div>
      </div>
      <div className="heroimg">
        <img src={heroimg} alt="hero image not found" />
      </div>
     </div>
    </div>
  )
}
