import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribe_container">
            <div className='empty'></div>
            <div className='Subsribe_mail'>
                  <div className="telegram"><img src="/assets/svg/telegram.svg" alt="" /></div>
                  <div className="subscribe_para">
                    <span className='real_para'> Subscribe to get information, latest news and other </span>
                    <span className='real_para'>interesting offers about Jadoo</span>
                  </div>
                  <div className="mail_box">
                    <img className='mail_img' src="/assets/svg/mail.svg" alt="" />
                    <input className='mail_input' type="email" placeholder='Your email' />
                    <button className='primary_btn'>Subscribe</button>
                  </div>
            </div>
            <div className='star_content'>
              <img src="/assets/images/stardown.png" alt="image not foound" />
              
            </div>
            
        </div>
    </div>
  )
}

export default Subscribe