import './Subscribe.css'
import STAR from "../../../public/assets/images/stardown.png"
import telegramimg from "../../../public/assets/svg/telegram.svg"
import mail from "../../../public/assets/svg/mail.svg"

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe_container">
            <div className='empty'></div>
            <div className='Subsribe_mail'>
                  <div className="telegram"><img src={telegramimg} alt="" /></div>
                  <div className="subscribe_para">
                    <span className='real_para'> Subscribe to get information, latest news and other </span>
                    <span className='real_para'>interesting offers about Jadoo</span>
                  </div>
                  <div className="mail_box">
                    <img className='mail_img' src={mail} alt="" />
                    <input className='mail_input' type="email" placeholder='Your email' />
                    <button className='primary_btn'>Subscribe</button>
                  </div>
            </div>
            <div className='star_content'>
              <img src={STAR} alt="image not foound" />
              
            </div>
            
        </div>
    </div>
  )
}

export default Subscribe