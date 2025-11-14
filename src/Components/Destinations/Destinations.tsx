import "./Destinations.css"

  const destinations = [
    {
      name: 'Rome, Italy',
      price: '$5,42k',
      days: '10 Days Trip',
      image: '/assets/images/rome.png',
      arrow : '/assets/svg/destarrow.svg',
    },
    {
      name: 'London, UK',
      price: '$4.2k',
      days: '12 Days Trip',
      image: '/assets/images/london.png',
      arrow : '/assets/svg/destarrow.svg',
    },
    {
      name: 'Full Europe',
      price: '$15k',
      image: '/assets/images/europe.png',
      days: '28 Days Trip',
      arrow : '/assets/svg/destarrow.svg',
    }
  ]

const Destinations = () => {
  return (
    <div className="destinations" id="destinations">
        <div className="destination_container">
            <div className="destination_header">
                 <div className="destination-label">Top Selling</div>
                 <h2 className="destination-title">Top Destinations</h2>
            </div>
           
            <div className="destinations-grid">
            {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className={`destination-image ${destination.name}`}>
                <div className="destination_full"><img src={destination.image} alt="" /></div>
              </div>
              <div className="destination-info">
                <div className="destination_items">
                  <h3 className="destination-name">{destination.name}</h3>
                <div className="destination-price">{destination.price}</div>
                </div>
                <div className="destination-trip">
                  <span className="trip-icon"><img src={destination.arrow} alt="" /></span>
                  <span>{destination.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
    </div>
  )
}

export default Destinations