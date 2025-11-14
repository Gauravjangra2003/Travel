import './Partners.css'

const partners = [
    {images : '/src/assets/images/partner1.png'},
    {images : '/src/assets/images/partner2.png'}, 
    {images : '/src/assets/images/partner3.png'},
    {images : '/src/assets/images/partner4.png'},
    {images : '/src/assets/images/partner5.png'},
]

const Partners = () => {
  return (
    <div className='partners'>
        <div className="partners_container">
            {
                partners.map((i,id) => (
                    <div className='icon_body' key={id}>
                        <img src={i.images} alt="image not found" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Partners