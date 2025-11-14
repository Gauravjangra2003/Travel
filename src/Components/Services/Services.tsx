import "./Services.css"
import STAR from "../../assets/images/star.png"

  const services = [
    {
      icon: '/src/assets/svg/sattelite.svg',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
      icon: '/src/assets/svg/plane.svg',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
      icon: '/src/assets/svg/mike.svg',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
    },
    {
      icon: '/src/assets/svg/setting.svg',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers'
    }
  ]

const Services = () => {
  return (
    <div className="services" id="hotels">
      <div className="services_container">
        <div className="services_header">
          <div></div>
           <div className="main_header">
                  <span className="cate_gory">CATEGORY</span>
                  <span className="head_ing">We Offer Best Services</span>
           </div>
           <div className="st_ar">
            <img  src={STAR} alt="image not foudn" />
           </div>
        </div>
        <div className="services-grid">
            {
              services.map((service,id) => (
                <div key={id} className="service_card">
                  <div className="services_item">
                    <div className="services_img">
                      <img src={service.icon} alt="" />
                    </div>
                    <h1 className="category_title">{service.title}</h1>
                    <div className="categrory_desc">{service.description}</div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Services