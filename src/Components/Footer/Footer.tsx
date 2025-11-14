import './Footer.css'

const DiscoverIcon = [
    {id : 1 , images :'/assets/svg/Social.svg'},
    {id : 2 , images :'/assets/svg/Social(1).svg'},
    {id : 3 , images :'/assets/svg/Social(2).svg'},
]

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer_container">
            <div className="F_Name">
                <img className='Jadoo' src="/assets/svg/Jadoo..svg" alt="image not found" />
                <p className='jadoo_para'>Book your trip in minute, get full Control for much longer.</p>
            </div>

            <div className="More">
                <div className="More1">
                    <div className="F_head1">
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Carrers</p>
                        <p>Mobile</p>
                    </div>
                    <div className="F_head1">
                        <h2>Contact</h2>
                        <p>Help/FAQ</p>
                        <p>Press</p>
                        <p>Affilates</p>
                    </div>
                    <div className="F_head1">
                        <h2>More</h2>
                        <p>Airlinefees</p>
                        <p>Airlines</p>
                        <p>Low fare tips</p>
                    </div>
                </div>
                <div className="More2">
                    <p className='copyright'>All rights reserved@jadoo.co</p>
                </div>
            </div>

            <div className="Discover">
                <div className="discover_icon">
                        {DiscoverIcon.map((i,id) => (
                            <img key={id} src={i.images} alt="" />
                        ))}
                </div>
                <div className="discoverstore">
                    <p className='paradiscover'>Discover our app</p>
                    <div className='stores'>
                        <img src="/assets/svg/GooglePlay.svg" alt="" />
                        <img src="/assets/svg/PlayStore.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer