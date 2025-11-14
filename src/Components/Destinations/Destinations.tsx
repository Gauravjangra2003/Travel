import "./Destinations.css"

  const destinations = [
    {
      name: 'Rome, Italy',
      price: '$5,42k',
      days: '10 Days Trip',
      image: '/src/assets/images/rome.png',
      arrow : '/src/assets/svg/destarrow.svg',
    },
    {
      name: 'London, UK',
      price: '$4.2k',
      days: '12 Days Trip',
      image: '/src/assets/images/london.png',
      arrow : '/src/assets/svg/destarrow.svg',
    },
    {
      name: 'Full Europe',
      price: '$15k',
      image: '/src/assets/images/europe.png',
      days: '28 Days Trip',
      arrow : '/src/assets/svg/destarrow.svg',
    }
  ]

const Destinations = () => {
  return (
    <div className="destinations">
        <div className="destination_container">
            <div className="destination_header">
                 <div className="destination-label">Top Selling</div>
                 <h2 className="destination-title">Top Destinations</h2>
            </div>
           
        </div>
    </div>
  )
}

export default Destinations